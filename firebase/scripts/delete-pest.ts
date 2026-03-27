import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cert, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const serviceAccountPath = existsSync(join(process.cwd(), 'service-account.json'))
  ? join(process.cwd(), 'service-account.json')
  : join(process.cwd(), 'firebase', 'service-account.json')

let appConfig = { credential: cert(JSON.parse(readFileSync(serviceAccountPath, 'utf8'))) }
initializeApp(appConfig)
const db = getFirestore()

async function deletePestSurgically(pestDocId: string) {
  console.log(`Starting surgical deletion of pest: "${pestDocId}"...`)

  const pestRef = db.collection('pragas').doc(pestDocId)
  const pestSnapshot = await pestRef.get()

  if (!pestSnapshot.exists) {
    console.error(`Pest "${pestDocId}" not found.`)
    process.exit(1)
  }

  const pestData = pestSnapshot.data()!
  const hospIds: number[] = pestData.hosp || []
  const legIds: string[] = pestData.files || []

  const orphanedHosts: string[] = []
  const orphanedLegs: string[] = []

  // Check hosts
  for (const hId of hospIds) {
    const others = await db.collection('pragas')
      .where('hosp', 'array-contains', hId)
      .get()
    
    // If only this pest uses it, it's an orphan
    if (others.size === 1 && others.docs[0].id === pestDocId) {
      orphanedHosts.push(String(hId))
    }
  }

  // Check legislations
  for (const lId of legIds) {
    const others = await db.collection('pragas')
      .where('files', 'array-contains', lId)
      .get()

    if (others.size === 1 && others.docs[0].id === pestDocId) {
      orphanedLegs.push(lId)
    }
  }

  console.log('\n--- Summary of resources to be removed ---')
  console.log(`Pest: ${pestDocId}`)
  console.log(`Orphaned Hosts: ${orphanedHosts.length > 0 ? orphanedHosts.join(', ') : 'None'}`)
  console.log(`Orphaned Legislations: ${orphanedLegs.length > 0 ? orphanedLegs.join(', ') : 'None'}`)
  console.log('------------------------------------------\n')

  try {
    await db.runTransaction(async (transaction) => {
      // 1. Delete Pest
      transaction.delete(pestRef)

      // 2. Delete Orphaned Hosts
      for (const hId of orphanedHosts) {
        transaction.delete(db.collection('hospedeiros').doc(hId))
      }

      // 3. Delete Orphaned Legislations
      for (const lId of orphanedLegs) {
        transaction.delete(db.collection('legislacoes').doc(lId))
        transaction.delete(db.collection('leg_texto').doc(lId))
      }
    })

    console.log('Surgical deletion completed SUCCESSFULY.')
    process.exit(0)
  } catch (error) {
    console.error('FAILED to execute transaction:', error)
    process.exit(1)
  }
}

const pestToDelete = process.argv[2]
if (!pestToDelete) {
  console.error('Usage: node delete-pest.ts <pest_doc_id>')
  process.exit(1)
}

deletePestSurgically(pestToDelete)
