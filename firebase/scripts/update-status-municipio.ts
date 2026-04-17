import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cert, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import stripJsonComments from 'strip-json-comments'

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

async function updateStatusMunicipio() {
  console.log('Starting update of status_municipio collection...')

  try {
    // 1. Read and parse status_município.jsonc
    const jsoncPath = join(
      process.cwd(),
      'cefiti-admin',
      'src',
      'status_município.jsonc',
    )
    console.log(`Reading ${jsoncPath}...`)

    if (!existsSync(jsoncPath)) {
      throw new Error(`File not found: ${jsoncPath}`)
    }

    const jsoncContent = readFileSync(jsoncPath, 'utf8')
    const jsonContent = stripJsonComments(jsoncContent)
    const data = JSON.parse(jsonContent)

    if (!Array.isArray(data)) {
      throw new Error('Data is not an array')
    }

    console.log(`Parsed ${data.length} pests from JSONC.`)

    // 2. Delete all existing documents in status_municipio
    const collectionRef = db.collection('status_municipio')
    console.log('Deleting existing documents in status_municipio...')

    const snapshot = await collectionRef.get()
    const deleteBatch = db.batch()

    snapshot.docs.forEach((doc) => {
      deleteBatch.delete(doc.ref)
    })

    if (snapshot.size > 0) {
      await deleteBatch.commit()
      console.log(`Deleted ${snapshot.size} documents.`)
    } else {
      console.log('No documents to delete.')
    }

    // 3. Insert new documents
    console.log('Inserting new documents...')

    // Using batches because Firestore has a 500 document limit per batch
    const chunks = []
    for (let i = 0; i < data.length; i += 500) {
      chunks.push(data.slice(i, i + 500))
    }

    for (const chunk of chunks) {
      const batch = db.batch()
      for (const item of chunk) {
        // Use pest name as ID as requested
        const docId = item.praga.replace(/\//g, '_') // Replace slashes if any
        const docRef = collectionRef.doc(docId)
        batch.set(docRef, item)
      }
      await batch.commit()
      console.log(`Inserted chunk of ${chunk.length} documents.`)
    }

    console.log('\nUpdate COMPLETED successfully!')
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to update collection:', err.message)
    process.exit(1)
  }
}

updateStatusMunicipio()
