import { mock } from 'node:test'
import type { User } from 'firebase/auth'

// Mock Firebase Auth
export const auth = {
  signOut: mock.fn(async () => {}),
  currentUser: null as User | null,
}

export const onAuthStateChanged = mock.fn(
  (_auth: any, callback: (user: User | null) => void) => {
    // Simulate immediate callback with null user
    callback(null)
    return () => {}
  },
)

// Mock Firestore
export const db = {}

export const collection = mock.fn((_db: any, name: string) => ({ name }))
export const doc = mock.fn((_db: any, col: string, id?: string) => ({
  col,
  id,
}))
export const query = mock.fn((col: any, ..._args: unknown[]) => col)
export const orderBy = mock.fn((field: string, direction?: 'asc' | 'desc') => ({
  field,
  direction,
}))

export const getDocs = mock.fn(async (_query: any) => ({
  docs: [] as { data: () => unknown }[],
}))

export const getDoc = mock.fn(async (_docRef: any) => ({
  exists: () => false,
  data: () => ({}),
}))

export const setDoc = mock.fn(
  async (_docRef: any, _data: unknown, _options?: unknown) => {},
)
export const deleteDoc = mock.fn(
  async (_docRef: any) => {},
)

// Mock Firebase App
export const initializeApp = mock.fn(() => ({}))
export const getAuth = mock.fn(() => auth)
export const getFirestore = mock.fn(() => db)
export const getStorage = mock.fn(() => ({}))
