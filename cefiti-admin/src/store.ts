import {
  onAuthStateChanged,
  type User,
  OAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { municipiosBrutos } from '#municipios'
import { deepSignal } from '../../cefiti/src/deep-signals.ts'
import { auth, db } from './firebase.ts'

export type AdminView =
  | 'login'
  | 'dashboard'
  | 'pragas'
  | 'hospedeiros'
  | 'legislacoes'
  | 'rules'
  | 'status_municipios'
  | 'catalogos'
  | 'usuarios'
  | 'perfil'

export interface AuthorizedUser {
  email: string
  nome: string
  cargo: string
  lotacao: string
  perfil: 'administrador' | 'usuário'
}

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
      municipios: Record<string, string>
    }[]
  }[]
}

export class Store {
  view: AdminView = 'login' //'dashboard'
  user: User | null = null
  currentProfile: AuthorizedUser | null = null
  authLoading: boolean = true
  sidebarOpen: boolean = true

  // Collections
  pragas: Praga[] = []
  hospedeiros: Hospedeiro[] = []
  legislacoes: Legislacao[] = []
  rules: Rule[] = []
  estados: Estado[] = []
  status_municipios: DB_StatusMunicipio[] = []
  authorized_users: AuthorizedUser[] = []
  catalogos = {
    status_fitossanitario: [] as string[],
    dbVersion: 0,
    lastUpdate: null as string | null,
  }

  loading = {
    pragas: false,
    hospedeiros: false,
    legislacoes: false,
    rules: false,
    estados: false,
    status_municipios: false,
    catalogos: false,
    authorized_users: false,
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
      originalEntryJson: '',
      municipios: [] as Municipio[],
      selectedInStatus: [] as string[],
      selectedInAvailable: [] as string[],
      showAddStatus: false,
      showAddEstado: false,
    },
    catalogos: {
      newStatus: '',
    },
    usuarios: {
      editing: null as AuthorizedUser | null,
      isNew: false,
    },
    perfil: {
      editing: null as AuthorizedUser | null,
    },
  }

  constructor() {}

  initAuth() {
    console.log('[Store] Initing Auth listener...')
    onAuthStateChanged(auth, async (user) => {
      console.log('[Store] Auth State Changed:', user ? user.email : 'No user')
      this.user = user

      try {
        if (!user) {
          this.currentProfile = null
          this.view = 'login'
        } else {
          console.log('[Store] Fetching profile for:', user.email)
          await this.fetchProfile()
          console.log('[Store] Profile loaded:', this.currentProfile?.perfil)

          if (this.view === 'login') {
            this.view = 'dashboard'
          }
          this.fetchCatalogos()
        }
      } catch (e) {
        console.error('[Store] Auth error:', e)
        this.view = 'login'
        // Only alert if there was a real user but profile fetch failed
        if (user) {
          alert(
            'Acesso negado: seu e-mail não está cadastrado ou houve erro no sistema.',
          )
          await this.logout()
        }
      } finally {
        this.authLoading = false
        console.log('[Store] Auth initialization complete. View:', this.view)
      }
    })
  }

  async fetchProfile() {
    if (!this.user?.email) return
    try {
      const docRef = doc(
        db,
        'configuracoes',
        'geral',
        'usuarios',
        this.user.email.toLowerCase(),
      )
      const snap = await getDoc(docRef)
      if (snap.exists()) {
        this.currentProfile = snap.data() as AuthorizedUser
      } else {
        console.warn('[Store] Profile not found for:', this.user.email)
        throw new Error('Não autorizado')
      }
    } catch (e) {
      console.error('[Store] Error fetching profile:', e)
      throw e
    }
  }

  async loginWithMicrosoft() {
    const provider = new OAuthProvider('microsoft.com')
    // Adicione escopos se necessário para obter mais infos, mas o Firebase lida com o básico
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Erro no login Microsoft:', error)
      alert(
        'Erro ao entrar com Microsoft. Verifique se o pop-up foi bloqueado.',
      )
    }
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
          this.fetchCatalogos(),
        ])
        break
      case 'status_municipios':
        await Promise.all([
          this.initStatusMunicipiosView(),
          this.fetchCatalogos(),
        ])
        break
      case 'catalogos':
        await this.fetchCatalogos()
        break
      case 'usuarios':
        await this.fetchAuthorizedUsers()
        break
      case 'perfil':
        if (this.currentProfile) {
          this.views.perfil.editing = { ...this.currentProfile }
        }
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
    } catch (e) {
      console.error('[Store] Error fetching pragas:', e)
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
    } catch (e) {
      console.error('[Store] Error fetching hospedeiros:', e)
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
    } catch (e) {
      console.error('[Store] Error fetching legislacoes:', e)
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
      const q = query(collection(db, 'rules'), orderBy('prag'))
      const snapshot = await getDocs(q)
      this.rules = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }) as Rule)
    } catch (e) {
      console.error('[Store] Error fetching rules:', e)
    } finally {
      this.loading.rules = false
    }
  }

  async saveRule(rule: Rule) {
    const docId = rule.id || `${rule.prag}_${Date.now()}`
    const { id, ...data } = rule
    await setDoc(doc(db, 'rules', docId), data)
    await this.fetchRules()
  }

  async deleteRule(id: string) {
    await deleteDoc(doc(db, 'rules', id))
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
    this.views.statusMunicipios.originalEntryJson = JSON.stringify(entry)
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
      this.views.statusMunicipios.currentEntry = JSON.parse(
        JSON.stringify(found),
      )
    } else {
      this.views.statusMunicipios.currentEntry = { praga, status: [] }
    }
    this.views.statusMunicipios.originalEntryJson = JSON.stringify(
      this.views.statusMunicipios.currentEntry,
    )
  }

  async fetchCatalogos() {
    this.loading.catalogos = true
    try {
      // Fetch status list
      const catRef = doc(db, 'configuracoes', 'catalogos')
      const catSnap = await getDoc(catRef)
      if (catSnap.exists()) {
        const data = catSnap.data()
        this.catalogos.status_fitossanitario = data.status_fitossanitario || []
      }

      // Fetch version and last update info
      const geralRef = doc(db, 'configuracoes', 'geral')
      const geralSnap = await getDoc(geralRef)
      if (geralSnap.exists()) {
        const data = geralSnap.data()
        this.catalogos.dbVersion = data.version || 0
        this.catalogos.lastUpdate = data.lastUpdate
          ? new Date(
              data.lastUpdate.seconds
                ? data.lastUpdate.seconds * 1000
                : data.lastUpdate,
            ).toLocaleDateString()
          : null
      }
    } finally {
      this.loading.catalogos = false
    }
  }

  async checkStatusInUse(
    s: string,
  ): Promise<{ inUse: boolean; locations: string[] }> {
    const locations: string[] = []

    try {
      // 1. Check in Rules (Origem)
      const qOrigem = query(
        collection(db, 'rules'),
        where('status_origem', 'array-contains', s),
      )
      const snapOrigem = await getDocs(qOrigem)
      if (!snapOrigem.empty) {
        locations.push(
          ...snapOrigem.docs.map(
            (d) =>
              `Regra (Praga: ${d.data().prag}): ${d.data().desc || d.id} (NA ORIGEM)`,
          ),
        )
      }

      // 2. Check in Rules (Destino)
      const qDestino = query(
        collection(db, 'rules'),
        where('status_destino', 'array-contains', s),
      )
      const snapDestino = await getDocs(qDestino)
      if (!snapDestino.empty) {
        locations.push(
          ...snapDestino.docs.map(
            (d) =>
              `Regra (Praga: ${d.data().prag}): ${d.data().desc || d.id} (NO DESTINO)`,
          ),
        )
      }

      // 3. Check in Status Município
      // We list and check in-memory since Firestore doesn't support array-contains for nested object fields
      const qMun = collection(db, 'status_municipio')
      const snapMun = await getDocs(qMun)
      snapMun.docs.forEach((doc) => {
        const data = doc.data() as DB_StatusMunicipio
        if (data.status?.some((st) => st.status_fitossanitário === s)) {
          locations.push(`Status Município: ${data.praga}`)
        }
      })
    } catch (e) {
      console.error('[Store] Error checking status usage:', e)
    }

    return {
      inUse: locations.length > 0,
      locations,
    }
  }

  async saveCatalogos(updatedStatuses: string[]) {
    const docRef = doc(db, 'configuracoes', 'catalogos')
    await setDoc(
      docRef,
      {
        status_fitossanitario: updatedStatuses,
      },
      { merge: true },
    )
    await this.fetchCatalogos()
  }

  // --- Authorized Users Methods ---

  async fetchAuthorizedUsers() {
    if (this.currentProfile?.perfil !== 'administrador') return
    this.loading.authorized_users = true
    try {
      const snapshot = await getDocs(
        collection(db, 'configuracoes', 'geral', 'usuarios'),
      )
      this.authorized_users = snapshot.docs.map(
        (doc) => doc.data() as AuthorizedUser,
      )
    } finally {
      this.loading.authorized_users = false
    }
  }

  async saveAuthorizedUser(user: AuthorizedUser) {
    const email = user.email.toLowerCase()
    await setDoc(doc(db, 'configuracoes', 'geral', 'usuarios', email), {
      ...user,
      email,
    })
    await this.fetchAuthorizedUsers()
    // Se estiver editando o próprio perfil, atualiza o currentProfile
    if (email === this.user?.email?.toLowerCase()) {
      this.currentProfile = { ...user, email }
    }
  }

  async deleteAuthorizedUser(email: string) {
    await deleteDoc(
      doc(db, 'configuracoes', 'geral', 'usuarios', email.toLowerCase()),
    )
    await this.fetchAuthorizedUsers()
  }
}

export const store = deepSignal(new Store())
store.initAuth()
