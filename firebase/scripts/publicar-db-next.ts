import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cert, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// AUTHENTICATION OPTIONS:
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

async function generateDbNext() {
  console.log('Fetching collections from Firestore...')

  try {
    const collections = await db.listCollections()
    const excludes = [
      'archive',
      'configuracoes',
      'municipios',
      'leg_texto',
      'regras',
      'status_fitossanitário', // User requested exclusion
    ]

    const data: Record<string, any[]> = {}
    let legTextoData: any[] = []

    // Fetch version
    console.log('Fetching version from configuracoes/geral...')
    const configDoc = await db.doc('configuracoes/geral').get()
    const version = configDoc.exists ? configDoc.data()?.version : 'unknown'
    console.log(`Version found: ${version}`)

    for (const collectionRef of collections) {
      const collName = collectionRef.id

      if (collName === 'leg_texto') {
        const snapshot = await collectionRef.get()
        legTextoData = snapshot.docs.map((doc) => doc.data())
        continue
      }

      // Check against excludes (also ignoring without accents if present)
      if (excludes.includes(collName) || collName === 'status_fitossanitario') {
        continue
      }

      console.log(`Reading collection: ${collName}`)
      const snapshot = await collectionRef.get()
      data[collName] = snapshot.docs.map((doc) => doc.data())
    }

    // 1. Generate db-next.js content
    console.log('Generating db-next.js file content...')
    let dbNextContent = '// CEFiTI - Database\n\n'
    dbNextContent += `var dbVersion = ${JSON.stringify(version)};\n`
    const exportNames: string[] = ['dbVersion']

    for (const [key, items] of Object.entries(data)) {
      // Clean up key for variable name - handle hyphens etc
      let safeKey = key.replace(/[^a-zA-Z0-9_]/g, '')
      // Just in case it starts with a number
      if (/^[0-9]/.test(safeKey)) {
        safeKey = `_${safeKey}`
      }

      dbNextContent += `var ${safeKey} = ${JSON.stringify(items, null, 2)};\n`
      if (!exportNames.includes(safeKey)) {
        exportNames.push(safeKey)
      }
    }

    if (exportNames.length > 0) {
      dbNextContent += `\nexport {\n  ${exportNames.join(',\n  ')}\n};\n`
    }

    const publicDir = join(__dirname, '..', 'public')

    if (!existsSync(publicDir)) {
      mkdirSync(publicDir, { recursive: true })
    }

    const filePath = join(publicDir, 'db-next.js')
    writeFileSync(filePath, dbNextContent, 'utf8')
    console.log(`\nGenerated db-next.js successfully at ${filePath}`)

    // 2. Generate legislacao.js
    console.log('Generating legislacao.js file content...')
    let legislacaoContent = '// CEFiTI - Legislacao\n\n'
    legislacaoContent += `var leg_texto = ${JSON.stringify(legTextoData, null, 2)};\n`
    legislacaoContent += `\nexport {\n  leg_texto\n};\n`

    const legislacaoPath = join(publicDir, 'legislacao.js')
    writeFileSync(legislacaoPath, legislacaoContent, 'utf8')
    console.log(`Generated legislacao.js successfully at ${legislacaoPath}`)

    console.log('\nSuccess!')
    process.exit(0)
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to generate files:', err.message)
    process.exit(1)
  }
}

generateDbNext()
