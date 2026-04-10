import { onAuthStateChanged, type User } from 'firebase/auth'
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore'
import { deepSignal } from '../../cefiti/src/deep-signals.ts'
import { municipiosBrutos } from '#municipios'
import { auth, db } from './firebase'

export type AdminView =
  | 'login'
  | 'dashboard'
  | 'pragas'
  | 'hospedeiros'
  | 'legislacoes'
  | 'rules'
  | 'status_municipios'
  | 'catalogos'

export interface Praga {
  prag: string
  pragc: string
  hosp: number[]
  files: string[]
}

export interface Hospedeiro {
  id: number
  nomeSci: string
  nomeVul: string[]
}

export interface Legislacao {
  id: string
  leg: string
  data: string
  texto?: string
}

export interface Rule {
  id?: string
  prag: string
  desc: string
  part: string[]
  status_origem: string[]
  status_destino: string[]
  exig: string[]
  leg: string
}

export interface Estado {
  ibge: number
  UF: string
  estado: string
}

export interface Municipio {
  id: string
  nome: string
  uf: string
  code: number
}

export interface DB_StatusMunicipio {
  id?: string
  praga: string
  status: {
    status_fitossanitário: string
    estados: {
      uf: string
      ibge: number
      municipios: number[]
    }[]
  }[]
}

class Store {
  view: AdminView = 'dashboard' //'login'
  user: User | null = null
  authLoading: boolean = false //true
  sidebarOpen: boolean = true

  // Collections
  pragas: Praga[] = []
  hospedeiros: Hospedeiro[] = []
  legislacoes: Legislacao[] = []
  rules: Rule[] = []
  estados: Estado[] = []
  status_municipios: DB_StatusMunicipio[] = []
  catalogos = {
    status_fitossanitario: [] as string[]
  }

  loading = {
    pragas: false,
    hospedeiros: false,
    legislacoes: false,
    rules: false,
    estados: false,
    status_municipios: false,
    catalogos: false,
  }

  // UI State for Views
  views = {
    pragas: {
      editing: null as Praga | null,
      isNew: false,
    },
    hospedeiros: {
      editing: null as Hospedeiro | null,
      isNew: false,
      vulInput: '',
    },
    legislacoes: {
      editing: null as Legislacao | null,
      isNew: false,
      showPreview: false,
      texto: '',
    },
    rules: {
      editing: null as Rule | null,
      isNew: false,
    },
    statusMunicipios: {
      selectedPraga: '',
      selectedStatus: '',
      selectedUF: '',
      currentEntry: null as DB_StatusMunicipio | null,
      municipios: [] as Municipio[],
      selectedInStatus: [] as number[],
      selectedInAvailable: [] as number[],
    },
    catalogos: {
      newStatus: '',
    },
  }

  constructor() {
    this.initAuth()
  }

  private initAuth() {
    onAuthStateChanged(auth, (user) => {
      this.user = user
      this.authLoading = false
      if (user && this.view === 'login') {
        this.view = 'dashboard'
      } else if (!user) {
        this.view = 'login'
      }
    })
  }

  async setView(view: AdminView) {
    this.view = view
    switch (view) {
      case 'pragas':
        await this.fetchPragas()
        break
      case 'hospedeiros':
        await this.fetchHospedeiros()
        break
      case 'legislacoes':
        await this.fetchLegislacoes()
        break
      case 'rules':
        await Promise.all([
          this.fetchRules(),
          this.fetchPragas(),
          this.fetchLegislacoes(),
        ])
        break
      case 'status_municipios':
        await this.initStatusMunicipiosView()
        break
      case 'catalogos':
        await this.fetchCatalogos()
        break
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  }

  async logout() {
    await auth.signOut()
    this.view = 'login'
  }

  // --- Data Methods ---

  async fetchPragas() {
    this.loading.pragas = true
    try {
      const q = query(collection(db, 'pragas'), orderBy('prag'))
      const snapshot = await getDocs(q)
      this.pragas = snapshot.docs.map((doc) => doc.data() as Praga)
    } finally {
      this.loading.pragas = false
    }
  }

  async savePraga(praga: Praga) {
    await setDoc(doc(db, 'pragas', praga.prag), praga)
    await this.fetchPragas()
  }

  async deletePraga(prag: string) {
    await deleteDoc(doc(db, 'pragas', prag))
    await this.fetchPragas()
  }

  async fetchHospedeiros() {
    this.loading.hospedeiros = true
    try {
      const q = query(collection(db, 'hospedeiros'), orderBy('nomeSci'))
      const snapshot = await getDocs(q)
      this.hospedeiros = snapshot.docs.map((doc) => doc.data() as Hospedeiro)
    } finally {
      this.loading.hospedeiros = false
    }
  }

  async saveHospedeiro(h: Hospedeiro) {
    await setDoc(doc(db, 'hospedeiros', h.id.toString()), h)
    await this.fetchHospedeiros()
  }

  async deleteHospedeiro(id: number) {
    await deleteDoc(doc(db, 'hospedeiros', id.toString()))
    await this.fetchHospedeiros()
  }

  async fetchLegislacoes() {
    this.loading.legislacoes = true
    try {
      const q = query(collection(db, 'legislacoes'), orderBy('id', 'desc'))
      const snapshot = await getDocs(q)
      this.legislacoes = snapshot.docs.map((doc) => doc.data() as Legislacao)
    } finally {
      this.loading.legislacoes = false
    }
  }

  async getLegislacaoTexto(id: string) {
    const textDoc = await getDoc(doc(db, 'leg_texto', id))
    return textDoc.exists() ? textDoc.data().texto : ''
  }

  async saveLegislacao(l: Legislacao, texto: string) {
    const { texto: _, ...metadata } = l
    await setDoc(doc(db, 'legislacoes', metadata.id), metadata)
    await setDoc(doc(db, 'leg_texto', metadata.id), { id: metadata.id, texto })
    await this.fetchLegislacoes()
  }

  async deleteLegislacao(id: string) {
    await deleteDoc(doc(db, 'legislacoes', id))
    await deleteDoc(doc(db, 'leg_texto', id))
    await this.fetchLegislacoes()
  }

  async fetchRules() {
    this.loading.rules = true
    try {
      const q = query(collection(db, 'regras'), orderBy('prag'))
      const snapshot = await getDocs(q)
      this.rules = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }) as Rule)
    } finally {
      this.loading.rules = false
    }
  }

  async saveRule(rule: Rule) {
    const docId = rule.id || `${rule.prag}_${Date.now()}`
    const { id, ...data } = rule
    await setDoc(doc(db, 'regras', docId), data)
    await this.fetchRules()
  }

  async deleteRule(id: string) {
    await deleteDoc(doc(db, 'regras', id))
    await this.fetchRules()
  }

  async fetchEstados() {
    this.loading.estados = true
    try {
      const snapshot = await getDocs(collection(db, 'estados'))
      this.estados = snapshot.docs
        .map((d) => d.data() as Estado)
        .sort((a, b) => a.estado.localeCompare(b.estado))
    } finally {
      this.loading.estados = false
    }
  }

  async fetchStatusMunicipios() {
    this.loading.status_municipios = true
    try {
      const snapshot = await getDocs(collection(db, 'status_municipio'))
      this.status_municipios = snapshot.docs.map(
        (d) => ({ ...d.data(), id: d.id }) as DB_StatusMunicipio,
      )
    } finally {
      this.loading.status_municipios = false
    }
  }

  async saveStatusMunicipio(entry: DB_StatusMunicipio) {
    const id = entry.id || entry.praga.replace(/\s+/g, '_')
    const { id: _, ...data } = entry
    await setDoc(doc(db, 'status_municipio', id), data)
    await this.fetchStatusMunicipios()
  }

  async initStatusMunicipiosView() {
    await Promise.all([
      this.fetchPragas(),
      this.fetchEstados(),
      this.fetchStatusMunicipios(),
    ])

    // Parse Municipios
    const ufMap = new Map<string, string>()
    this.estados.forEach((e) => {
      ufMap.set(String(e.ibge), e.UF)
    })

    this.views.statusMunicipios.municipios = municipiosBrutos.map((m) => {
      const id = m.slice(0, 6)
      const nome = m.slice(6).trim()
      const ibgePrefix = id.slice(0, 2)
      const uf = ufMap.get(ibgePrefix) || ''
      return { id, nome, uf, code: Number(id.slice(2)) }
    })
  }

  updateStatusMunicipiosEntry() {
    const praga = this.views.statusMunicipios.selectedPraga
    if (!praga) {
      this.views.statusMunicipios.currentEntry = null
      return
    }

    const found = this.status_municipios.find((d) => d.praga === praga)
    if (found) {
      this.views.statusMunicipios.currentEntry = { ...found }
    } else {
      this.views.statusMunicipios.currentEntry = { praga, status: [] }
    }
  }

  async fetchCatalogos() {
    this.loading.catalogos = true
    try {
      const docRef = doc(db, 'configuracoes', 'geral')
      const snap = await getDoc(docRef)
      if (snap.exists()) {
        const data = snap.data()
        this.catalogos.status_fitossanitario =
          data.catalogos?.status_fitossanitário || []
      }
    } finally {
      this.loading.catalogos = false
    }
  }

  async saveCatalogos(updatedStatuses: string[]) {
    const docRef = doc(db, 'configuracoes', 'geral')
    await setDoc(
      docRef,
      {
        catalogos: {
          status_fitossanitário: updatedStatuses,
        },
      },
      { merge: true },
    )
    await this.fetchCatalogos()
  }
}

export const store = deepSignal(new Store())
