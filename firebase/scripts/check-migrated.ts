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

async function check() {
  const collections = [
    'pragas',
    'hospedeiros',
    'legislacoes',
    'rules',
    'status_municipio',
  ]

  console.log('--- CHECKING PRODUÇÃO ---')
  for (const col of collections) {
    const snap = await db.collection(`producao/dados/${col}`).get()
    console.log(`producao/dados/${col}: ${snap.size} docs`)
    if (snap.size > 0) {
      console.log(`  Sample ID: ${snap.docs[0].id}`)
    }
  }

  console.log('--- CHECKING DESENVOLVIMENTO ---')
  for (const col of collections) {
    const snap = await db.collection(`desenvolvimento/dados/${col}`).get()
    console.log(`desenvolvimento/dados/${col}: ${snap.size} docs`)
    if (snap.size > 0) {
      console.log(`  Sample ID: ${snap.docs[0].id}`)
    }
  }
}

check()
