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

async function initializeCollections() {
  console.log('Starting initialization of Firestore collections...')

  try {
    // 1. Populate status_fitossanitario
    const statuses = [
      'Área Sem Ocorrência',
      'Área Com Ocorrência',
      'Status Desconhecido',
      'Área Livre de Praga (ALP)',
      'Sistema de Mitigação de Risco (SMR)',
      'Área Sob Erradicação',
      'Zona Tampão',
      'Área Erradicada',
    ]

    console.log('Populating status_fitossanitario...')
    for (const status of statuses) {
      const docRef = db.collection('status_fitossanitario').doc(status)
      await docRef.set({ status })
      console.log(`- Created status: ${status}`)
    }

    // 2. Ensure status_municipio and rules exist
    // In Firestore, collections are created on-demand.
    // We can't create an empty collection, but we can add a placeholder and delete it,
    // or simply skip as they will be created when actual data is added.
    // However, to satisfy the requirement "create the collections",
    // I'll create a metadata document in each to ensure they appear in the console.

    console.log('Initializing status_municipio...')
    await db.collection('status_municipio').doc('_init_').set({
      description: 'Collection for municipality phytosanitary status',
      createdAt: new Date(),
    })
    console.log('- Collection status_municipio initialized with metadata.')

    console.log('Initializing rules...')
    await db.collection('rules').doc('_init_').set({
      description: 'Collection for phytosanitary rules',
      createdAt: new Date(),
    })
    console.log('- Collection rules initialized with metadata.')

    console.log('\nInitialization COMPLETED successfully!')
  } catch (error) {
    const err = error as Error
    console.error('\nFAILED to initialize collections:', err.message)
    process.exit(1)
  }
}

initializeCollections()
