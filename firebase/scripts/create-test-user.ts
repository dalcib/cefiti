import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cert, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const serviceAccountPath = existsSync(
  join(process.cwd(), 'service-account.json'),
)
  ? join(process.cwd(), 'service-account.json')
  : join(process.cwd(), 'firebase', 'service-account.json')

const appConfig = {
  credential: cert(JSON.parse(readFileSync(serviceAccountPath, 'utf8'))),
}
initializeApp(appConfig)
const db = getFirestore()

async function createTestUser() {
  console.log('Creating test user in Firestore...')
  const docRef = db.doc('configuracoes/geral/usuarios/cefiti@agro.gov.br')
  await docRef.set({
    email: 'cefiti@agro.gov.br',
    nome: 'Administrador de Testes',
    cargo: 'Desenvolvedor',
    lotacao: 'CEFiTI',
    perfil: 'administrador'
  })
  console.log('Test user created in Firestore successfully.')
  process.exit(0)
}

createTestUser().catch((err) => {
  console.error('Error creating test user:', err)
  process.exit(1)
})
