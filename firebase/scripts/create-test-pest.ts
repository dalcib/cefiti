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

async function createTestData() {
  console.log('Creating test data...')

  const batch = db.batch()

  // 1. Hosts
  // Unique to our test pest
  const hostA = db.collection('hospedeiros').doc('9999')
  batch.set(hostA, { id: 9999, nomeSci: 'Testus unicus', nomeVul: ['Host Unico'] })

  // Shared with another pest
  const hostB = db.collection('hospedeiros').doc('9998')
  batch.set(hostB, { id: 9998, nomeSci: 'Testus communis', nomeVul: ['Host Compartilhado'] })

  // 2. Legislations
  // Unique to our test pest
  const leg1 = db.collection('legislacoes').doc('LEG-TEST-01')
  batch.set(leg1, { id: 'LEG-TEST-01', leg: 'Legislação Única de Teste', data: '01/01/2026' })
  const leg1Texto = db.collection('leg_texto').doc('LEG-TEST-01')
  batch.set(leg1Texto, { id: 'LEG-TEST-01', texto: 'Conteúdo da legislação única.' })

  // Shared/Existing (we will use a real one or create another test one)
  const leg2 = db.collection('legislacoes').doc('LEG-TEST-SHARED')
  batch.set(leg2, { id: 'LEG-TEST-SHARED', leg: 'Legislação Compartilhada de Teste', data: '01/01/2026' })
  const leg2Texto = db.collection('leg_texto').doc('LEG-TEST-SHARED')
  batch.set(leg2Texto, { id: 'LEG-TEST-SHARED', texto: 'Conteúdo da legislação compartilhada.' })

  // 3. Pests
  // The pest to be deleted
  const testPest = db.collection('pragas').doc('Test Pest')
  batch.set(testPest, {
    id: 9999,
    prag: 'Test Pest',
    pragc: 'PESTIS TESTICUS',
    hosp: [9999, 9998],
    files: ['LEG-TEST-01', 'LEG-TEST-SHARED']
  })

  // The "other" pest that keeps Host B and LEG-TEST-SHARED alive
  const sharedPest = db.collection('pragas').doc('Shared Pest')
  batch.set(sharedPest, {
    id: 9998,
    prag: 'Shared Pest',
    pragc: 'PESTIS COMMUNIS',
    hosp: [9998],
    files: ['LEG-TEST-SHARED']
  })

  await batch.commit()
  console.log('Test data created successfully.')
  process.exit(0)
}

createTestData().catch(err => {
  console.error('Error creating test data:', err)
  process.exit(1)
})
