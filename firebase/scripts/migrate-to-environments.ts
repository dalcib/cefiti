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

async function migrate() {
  console.log('--- STARTING FIRESTORE ENVIRONMENT MIGRATION ---')

  try {
    // 1. Fetch version from root configuracoes/geral
    console.log('Fetching root version...')
    const rootGeralDoc = await db.doc('configuracoes/geral').get()
    const prodVersion = rootGeralDoc.exists
      ? rootGeralDoc.data()?.version || 1
      : 1
    const devVersion = prodVersion + 1
    console.log(
      `Root version: ${prodVersion}. Dev version will be: ${devVersion}`,
    )

    // 2. Define data collections to migrate
    const collectionsToMigrate = [
      'pragas',
      'hospedeiros',
      'legislacoes',
      'rules',
      'status_municipio',
    ]

    for (const collName of collectionsToMigrate) {
      console.log(`Migrating collection: ${collName}...`)
      const snapshot = await db.collection(collName).get()
      console.log(`Found ${snapshot.size} documents in ${collName}`)

      // Copy documents to the environment-specific collections
      for (const docSnap of snapshot.docs) {
        const docId = docSnap.id
        const data = docSnap.data()

        // Copy to production environment
        await db
          .collection(`producao/dados/${collName}`)
          .doc(docId)
          .set(data)
        // Copy to development environment
        await db
          .collection(`desenvolvimento/dados/${collName}`)
          .doc(docId)
          .set(data)
      }
    }

    // 3. Set environment-specific version numbers in {env}/versao document
    const generalConfigData = rootGeralDoc.exists ? rootGeralDoc.data()! : {}

    await db.doc('producao/versao').set({
      ...generalConfigData,
      version: prodVersion,
      lastUpdate: new Date(),
    })
    await db.doc('desenvolvimento/versao').set({
      ...generalConfigData,
      version: devVersion,
      lastUpdate: new Date(),
    })
    console.log('Environment versions set up successfully.')

    // 4. Migrate static states to geodata/dados/estados
    console.log('Migrating states to geodata/dados/estados...')
    const estadosSnapshot = await db.collection('estados').get()
    console.log(`Found ${estadosSnapshot.size} states.`)
    for (const docSnap of estadosSnapshot.docs) {
      await db.collection('geodata/dados/estados').doc(docSnap.id).set(docSnap.data())
    }

    // 5. Migrate static municipalities to geodata/dados/municipios
    console.log('Migrating municipalities to geodata/dados/municipios...')
    const municipiosSnapshot = await db.collection('municipios').get()
    console.log(`Found ${municipiosSnapshot.size} municipalities at the root.`)

    let batch = db.batch()
    let count = 0
    let totalMigrated = 0

    for (const docSnap of municipiosSnapshot.docs) {
      const docRef = db.collection('geodata/dados/municipios').doc(docSnap.id)
      batch.set(docRef, docSnap.data())
      count++
      totalMigrated++

      if (count === 500) {
        console.log(`Committing batch of ${count}... (Total: ${totalMigrated})`)
        await batch.commit()
        batch = db.batch()
        count = 0
      }
    }

    if (count > 0) {
      console.log(
        `Committing final batch of ${count}... (Total: ${totalMigrated})`,
      )
      await batch.commit()
    }

    console.log('--- MIGRATION COMPLETED SUCCESSFULLY ---')
    process.exit(0)
  } catch (error) {
    console.error('--- MIGRATION FAILED ---', error)
    process.exit(1)
  }
}

migrate()
