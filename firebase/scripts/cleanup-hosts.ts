import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cert, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

// AUTHENTICATION:
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

async function cleanupHosts() {
  console.log('Starting cleanup of orphaned hosts...')

  try {
    // 1. Get all host IDs referenced by pests
    console.log('Fetching all pests to identify referenced host IDs...')
    const pragasSnapshot = await db.collection('pragas').get()
    const referencedHostIds = new Set<number>()

    pragasSnapshot.docs.forEach((doc) => {
      const data = doc.data()
      if (data.hosp && Array.isArray(data.hosp)) {
        data.hosp.forEach((id: number) => referencedHostIds.add(id))
      }
    })

    console.log(
      `Found ${referencedHostIds.size} unique host IDs referenced by pests.`,
    )

    // 2. Get all hosts and identify orphans
    console.log('Fetching all hosts...')
    const hospedeirosSnapshot = await db.collection('hospedeiros').get()
    const orphans: string[] = []

    hospedeirosSnapshot.docs.forEach((doc) => {
      const data = doc.data()
      if (!referencedHostIds.has(data.id)) {
        orphans.push(doc.id)
      }
    })

    console.log(
      `Found ${orphans.length} orphaned hosts out of ${hospedeirosSnapshot.size} total hosts.`,
    )

    if (orphans.length === 0) {
      console.log('No orphaned hosts found. Nothing to delete.')
      return
    }

    // 3. Delete orphans in batches
    console.log(`Deleting ${orphans.length} orphaned hosts...`)

    // Firestore allows up to 500 operations per batch
    const BATCH_SIZE = 500
    for (let i = 0; i < orphans.length; i += BATCH_SIZE) {
      const batch = db.batch()
      const chunk = orphans.slice(i, i + BATCH_SIZE)
      chunk.forEach((docId) => {
        batch.delete(db.collection('hospedeiros').doc(docId))
      })
      await batch.commit()
      console.log(
        `- Deleted batch of ${chunk.length} hosts (${i + chunk.length}/${orphans.length})`,
      )
    }

    console.log('\nCleanup COMPLETED successfully!')
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to cleanup hosts:', err.message)
    process.exit(1)
  }
}

cleanupHosts()
