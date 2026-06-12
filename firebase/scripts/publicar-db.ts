import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
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

async function publicar() {
  console.log('Starting local database generation for Hosting...')

  try {
    // 1. Get current version
    console.log('Fetching version from producao/versao...')
    const configDoc = await db.doc('producao/versao').get()
    const currentVersion = configDoc.exists ? configDoc.data()?.version || 0 : 0

    // 2. Read all data
    console.log('Reading data from Firestore...')
    const collections = ['pragas', 'hospedeiros', 'rules', 'legislacoes']
    const data: Record<string, Record<string, unknown>[]> = {}

    for (const collName of collections) {
      // Map 'rules' output key to 'regras' if expected by legacy, or keep rules.
      // Let's output 'rules' as 'regras' to maintain backward compatibility in the JS bundle.
      const outputName = collName === 'rules' ? 'regras' : collName
      const snapshot = await db.collection(`producao/dados/${collName}`).get()
      data[outputName] = snapshot.docs.map((doc) => doc.data())
    }

    // Read states from geodata/dados/estados
    console.log('Reading collection: estados')
    const estadosSnapshot = await db.collection('geodata/dados/estados').get()
    data['estados'] = estadosSnapshot.docs.map((doc) => doc.data())

    // 3. Generate JS content (ESM format)
    console.log('Generating db.js file content...')
    let jsContent = '// CEFiTI - Database\n\n'
    for (const [key, items] of Object.entries(data)) {
      jsContent += `export const ${key} = ${JSON.stringify(items, null, 2)};\n\n`
    }
    jsContent += `export const dbVersion = ${currentVersion};\n`

    // 4. Save locally for Hosting deploy
    const publicDir = join(process.cwd(), 'public')
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir)
    }
    const filePath = join(publicDir, 'db-next.js')
    writeFileSync(filePath, jsContent, 'utf8')

    console.log(
      `\nLocal database version ${currentVersion} generated successfully at ${filePath}`,
    )
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to publish database:', err.message)
    process.exit(1)
  }
}

publicar()
