import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cert, initializeApp } from 'firebase-admin/app'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'

// AUTHENTICATION OPTIONS:
// 1. Recommended: Save your Service Account Key as 'firebase/service-account.json'
//    (Generate at: Firebase Console > Project Settings > Service Accounts)
// 2. Alternative: Install Google Cloud SDK and run: gcloud auth application-default login
//    The script will then use those credentials automatically.
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

async function publicar() {
  console.log('Starting local database generation for Hosting...')

  try {
    const result = await db.runTransaction(async (transaction) => {
      // 1. Get current version
      const configRef = db.collection('configuracoes').doc('geral')
      const configDoc = await transaction.get(configRef)
      const currentVersion = configDoc.exists
        ? configDoc.data()?.version || 0
        : 0
      const nextVersion = currentVersion + 1

      // 2. Read all data
      console.log('Reading data from Firestore...')
      const collections = [
        'pragas',
        'hospedeiros',
        'regras',
        'legislacoes',
        'estados',
      ]
      const data: Record<string, any[]> = {}

      for (const collName of collections) {
        const snapshot = await db.collection(collName).get()
        data[collName] = snapshot.docs.map((doc) => doc.data())
      }

      // 3. Increment version and update metadata
      const lastUpdate = FieldValue.serverTimestamp()
      transaction.set(
        configRef,
        {
          version: nextVersion,
          lastUpdate,
        },
        { merge: true },
      )

      // 4. Archive snapshot (Backup of the state being replaced)
      console.log(`Archiving version ${currentVersion} in Firestore...`)
      const archiveRef = db
        .collection('archive')
        .doc(`v${currentVersion}_${Date.now()}`)
      transaction.set(archiveRef, {
        version: currentVersion,
        timestamp: lastUpdate,
        data: data,
      })

      return { nextVersion, data }
    })

    const { nextVersion, data } = result as {
      nextVersion: number
      data: Record<string, any[]>
    }

    // 5. Generate JS content (ESM format)
    console.log('Generating db.js file content...')
    let jsContent = '// CEFiTI - Database\n\n'
    for (const [key, items] of Object.entries(data)) {
      jsContent += `export const ${key} = ${JSON.stringify(items, null, 2)};\n\n`
    }
    jsContent += `export const dbVersion = ${nextVersion};\n`

    // 6. Save locally for Hosting deploy
    const publicDir = join(process.cwd(), 'public')
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir)
    }
    const filePath = join(publicDir, 'db-next.js')
    writeFileSync(filePath, jsContent, 'utf8')

    console.log(
      `\nLocal database version ${nextVersion} generated successfully at ${filePath}`,
    )
    console.log('Deploying to Firebase Hosting...')
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to publish database:', err.message)
    process.exit(1)
  }
}

publicar()
