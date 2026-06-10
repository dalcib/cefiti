import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cert, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const serviceAccountPath = existsSync(
  join(process.cwd(), 'service-account.json'),
)
  ? join(process.cwd(), 'service-account.json')
  : join(process.cwd(), 'firebase', 'service-account.json')

let appConfig = {}
if (existsSync(serviceAccountPath)) {
  appConfig = {
    credential: cert(JSON.parse(readFileSync(serviceAccountPath, 'utf8'))),
  }
}

initializeApp(appConfig)
const db = getFirestore()

async function unifyCollection(legislacoesPath: string, legTextoPath: string) {
  console.log(`Unifying: ${legislacoesPath} and ${legTextoPath}...`)
  
  const legislacoesSnap = await db.collection(legislacoesPath).get()
  const legTextoSnap = await db.collection(legTextoPath).get()

  console.log(`Found ${legislacoesSnap.size} legislations and ${legTextoSnap.size} texts.`)

  const textMap = new Map<string, string>()
  for (const docSnap of legTextoSnap.docs) {
    const data = docSnap.data()
    if (data.texto) {
      textMap.set(docSnap.id, data.texto)
    }
  }

  const batch = db.batch()
  let count = 0

  for (const docSnap of legislacoesSnap.docs) {
    const docId = docSnap.id
    const data = docSnap.data()
    const texto = textMap.get(docId) || ''

    // Add texto to the legislation metadata
    batch.set(
      db.collection(legislacoesPath).doc(docId),
      { ...data, texto },
      { merge: true }
    )
    count++

    if (count === 500) {
      await batch.commit()
      console.log(`Merged a batch of ${count} legislations.`)
      count = 0
    }
  }

  if (count > 0) {
    await batch.commit()
    console.log(`Merged final batch of ${count} legislations.`)
  }

  // Delete leg_texto documents
  console.log(`Cleaning up/deleting documents in ${legTextoPath}...`)
  const deleteBatch = db.batch()
  let deleteCount = 0

  for (const docSnap of legTextoSnap.docs) {
    deleteBatch.delete(db.collection(legTextoPath).doc(docSnap.id))
    deleteCount++

    if (deleteCount === 500) {
      await deleteBatch.commit()
      console.log(`Deleted a batch of ${deleteCount} texts.`)
      deleteCount = 0
    }
  }

  if (deleteCount > 0) {
    await deleteBatch.commit()
    console.log(`Deleted final batch of ${deleteCount} texts.`)
  }
}

async function startUnification() {
  try {
    console.log('--- STARTING LEGISLATION UNIFICATION ---')

    // 1. Unify in Desenvolvimento
    await unifyCollection(
      'desenvolvimento/dados/legislacoes',
      'desenvolvimento/dados/leg_texto'
    )

    // 2. Unify in Produção
    await unifyCollection(
      'producao/dados/legislacoes',
      'producao/dados/leg_texto'
    )

    // 3. Unify legacy root if it exists
    const rootLegSnap = await db.collection('legislacoes').get()
    if (rootLegSnap.size > 0) {
      await unifyCollection('legislacoes', 'leg_texto')
    }

    console.log('--- LEGISLATION UNIFICATION COMPLETED SUCCESSFULLY ---')
    process.exit(0)
  } catch (error) {
    console.error('--- UNIFICATION FAILED ---', error)
    process.exit(1)
  }
}

startUnification()
