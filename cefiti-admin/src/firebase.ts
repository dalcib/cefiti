import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  projectId: 'cefiti',
  appId: '1:485822995260:web:5a03fca2431e8976c1dc39',
  storageBucket: 'cefiti.firebasestorage.app',
  apiKey: 'AIzaSyBIKMel_XS1J54NL3nPquKs0rw5PNKD-Rs',
  authDomain: 'cefiti.firebaseapp.com',
  messagingSenderId: '485822995260',
  measurementId: 'G-TN0N3V94ZZ',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
