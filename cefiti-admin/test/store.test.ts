import assert from 'node:assert/strict'
import { beforeEach, describe, it, mock } from 'node:test'

// Mock DOM
import './mocks/dom.mock.ts'

const mockAuth = { signOut: mock.fn(async () => {}) }
const mockDb = {}
const mockOnAuthStateChanged = mock.fn((_auth: any, cb: any) => {
  cb(null) // Simulate not logged in
  return () => {}
})

const firebasePath = new URL('../src/firebase.ts', import.meta.url).href
const authPath = 'firebase/auth'
const municipiosPath = '#municipios'

// Mock Firestore functions
const mockGetDocs = mock.fn(async () => ({ docs: [] as any[] }))
const mockGetDoc = mock.fn(async () => ({
  exists: () => false as boolean,
  data: () => ({}),
}))
const mockSetDoc = mock.fn(async () => {})
const mockDeleteDoc = mock.fn(async () => {})
const mockCollection = mock.fn((_db: any, name: string) => ({ name }))
const mockDoc = mock.fn((_db: any, col: string, id: string) => ({ col, id }))
const mockQuery = mock.fn((q: any) => q)
const mockOrderBy = mock.fn(() => ({}))

// Mocking the firebase module
mock.module(firebasePath, {
  namedExports: {
    auth: mockAuth,
    db: mockDb,
  },
})

// Mocking onAuthStateChanged which is imported from firebase/auth
mock.module(authPath, {
  namedExports: {
    onAuthStateChanged: mockOnAuthStateChanged,
    OAuthProvider: class {},
    signInWithPopup: mock.fn(async () => {}),
  },
})

// Mocking firebase/firestore
mock.module('firebase/firestore', {
  namedExports: {
    collection: mockCollection,
    doc: mockDoc,
    query: mockQuery,
    getDocs: mockGetDocs,
    getDoc: mockGetDoc,
    setDoc: mockSetDoc,
    deleteDoc: mockDeleteDoc,
    orderBy: mockOrderBy,
    where: mock.fn(() => ({})),
  },
})

// Mocking #municipios alias
mock.module(municipiosPath, {
  namedExports: {
    municipiosBrutos: [],
  },
})

describe('Cefiti Admin Store', () => {
  let Store: any
  let store: any

  beforeEach(async () => {
    // Reset mocks before each test
    mockOnAuthStateChanged.mock.resetCalls()
    mockAuth.signOut.mock.resetCalls()

    const module = await import('../src/store.ts')
    Store = module.Store
  })

  it('should initialize with view "login" when no user is present', async () => {
    mockOnAuthStateChanged.mock.mockImplementationOnce(
      (_auth: any, cb: any) => {
        cb(null)
        return () => {}
      },
    )
    store = new Store()
    store.initAuth()

    assert.strictEqual(store.view, 'login')
    assert.strictEqual(store.user, null)
  })

  it('should initialize with view "dashboard" when user is present', async () => {
    const mockUser = { uid: '123', email: 'test@example.com' }
    const mockProfile = {
      email: 'test@example.com',
      nome: 'Test User',
      perfil: 'administrador',
    }

    // Mock successful profile fetch
    mockGetDoc.mock.mockImplementationOnce(async () => ({
      exists: () => true,
      data: () => mockProfile,
    }))

    mockOnAuthStateChanged.mock.mockImplementationOnce(
      (_auth: any, cb: any) => {
        cb(mockUser)
        return () => {}
      },
    )

    store = new Store()
    store.initAuth()

    // Give time for async fetchProfile to complete
    await new Promise((resolve) => setTimeout(resolve, 0))

    assert.strictEqual(store.view, 'dashboard')
    assert.strictEqual(store.user, mockUser)
    assert.deepEqual(store.currentProfile, mockProfile)
  })

  it('should toggle sidebar', () => {
    store = new Store()
    const initial = store.sidebarOpen
    store.toggleSidebar()
    assert.strictEqual(store.sidebarOpen, !initial)
  })

  it('should fetch pragas and update state', async () => {
    store = new Store()
    const mockPragas = [
      { prag: 'Praga A', pragc: 'Cientifico A', hosp: [1], files: [] },
      { prag: 'Praga B', pragc: 'Cientifico B', hosp: [2], files: [] },
    ]

    mockGetDocs.mock.mockImplementationOnce(async () => ({
      docs: mockPragas.map((p) => ({ data: () => p })),
    }))

    await store.fetchPragas()
    assert.strictEqual(store.pragas.length, 2)
    assert.strictEqual(store.pragas[0].prag, 'Praga A')
    assert.strictEqual(store.loading.pragas, false)
  })

  it('should change view via setView and trigger fetch', async () => {
    store = new Store()
    const fetchPragasSpy = mock.method(store, 'fetchPragas', async () => {})

    await store.setView('pragas')
    assert.strictEqual(store.view, 'pragas')
    assert.strictEqual(fetchPragasSpy.mock.callCount(), 1)
  })

  it('should handle logout', async () => {
    store = new Store()
    await store.logout()
    assert.strictEqual(mockAuth.signOut.mock.callCount(), 1)
    assert.strictEqual(store.view, 'login')
  })
})
