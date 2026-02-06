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
  console.log('Starting migration of municipalities to Firestore...')

  try {
    // 1. Get states to map IBGE prefix to UF
    console.log('Fetching states from Firestore...')
    const estadosSnapshot = await db.collection('estados').get()
    const ufMap = new Map<string, string>()
    estadosSnapshot.forEach((doc) => {
      const data = doc.data()
      if (data.ibge) {
        ufMap.set(String(data.ibge).padStart(2, '0'), data.UF)
      }
    })

    // 2. Read municipios.txt
    // municipios.txt is in cefiti/public/ relative to the project root
    // But since this script might be run from the root or from firebase/, let's find it.
    const rootDir = process.cwd().endsWith('firebase')
      ? join(process.cwd(), '..')
      : process.cwd()
    const municipiosPath = join(rootDir, 'cefiti', 'public', 'municipios.txt')

    if (!existsSync(municipiosPath)) {
      throw new Error(`Municipios file not found at ${municipiosPath}`)
    }

    const content = readFileSync(municipiosPath, 'utf8')
    const lines = content.split('\n').filter((l) => l.trim().length > 6)

    console.log(`Found ${lines.length} municipalities to migrate.`)

    // 3. Migrate in batches of 500
    let batch = db.batch()
    let count = 0
    let totalMigrated = 0

    for (const line of lines) {
      const id = line.slice(0, 6)
      const nome = line.slice(6).trim()
      const ibgePrefix = id.slice(0, 2)
      const sigla = ufMap.get(ibgePrefix) || ''

      const docRef = db.collection('municipios').doc(id)
      batch.set(docRef, {
        id: parseInt(id),
        nome,
        sigla,
      })

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

    console.log('\nMigration COMPLETED successfully!')
    console.log(`Total municipalities migrated: ${totalMigrated}`)
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to migrate municipalities:', err.message)
    process.exit(1)
  }
}

migrate()
