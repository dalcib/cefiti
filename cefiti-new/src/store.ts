import { deepSignal } from '../../cefiti/src/deep-signals.ts'
import {
  estados,
  hospedeiros,
  legislacoes,
  pragas,
  rules,
  status_municipio,
} from '../../firebase/public/db-next.js'

declare global {
  interface Window {
    gtag(
      event: string,
      action_name: string,
      params: {
        hospSci: string
        prod: string
        orig: string
        dest: string
      },
    ): void
  }
}

export interface Dados {
  hospSci: string
  hospVul: string
  hospId: number
  prod: string
  orig: string
  dest: string
  municipioOrigem: string
  municipioDestino: string
}

export const hospedeiroSciMap = new Map(
  hospedeiros.map((h) => [h.id, h.nomeSci]),
)

export interface Municipio {
  id: string
  nome: string
  uf: string
}

export interface StatusMunicipio {
  uf: string
  ibge: number
  municipios: Record<string, string>
}

export interface StatusFitossanitario {
  status_fitossanitário: string
  estados: StatusMunicipio[]
}

export interface PestStatusEntry {
  praga: string
  status: StatusFitossanitario[]
}

export class Store {
  dados: Dados = {
    hospSci: '',
    hospVul: '',
    hospId: 0,
    prod: '',
    orig: '',
    dest: '',
    municipioOrigem: '',
    municipioDestino: '',
  }
  exibeBase: boolean = false
  searched: boolean = false
  municipios: Municipio[] = []

  constructor() {
    this.loadMunicipios()
  }

  async loadMunicipios() {
    let text = ''
    if (typeof window !== 'undefined' && window.location?.protocol.startsWith('http')) {
      try {
        const response = await fetch('/municipios.txt')
        if (response.ok) {
          text = await response.text()
          console.log('Municipios loaded successfully via fetch')
        } else {
          console.error('Failed to load municipios via fetch:', response.status)
        }
      } catch (error) {
        console.error('Erro ao carregar municipios via fetch', error)
      }
    } else {
      try {
        const fs = await import('node:fs/promises')
        const path = await import('node:path')
        const filePath = path.join(
          process.cwd(),
          'cefiti-new/public/municipios.txt',
        )
        text = await fs.readFile(filePath, 'utf-8')
      } catch (error) {
        // Silently fail in tests if file not found, or log if needed
      }
    }

    if (text) {
      const ufMap = new Map<string, string>()
      for (const e of estados) {
        if (e.ibge) {
          ufMap.set(String(e.ibge), e.UF)
        }
      }

      this.municipios = text
        .split('\n')
        .filter((l) => l.trim().length > 6)
        .map((l) => {
          const id = l.slice(0, 6)
          const nome = l.slice(6).trim()
          const ibgePrefix = id.slice(0, 2)
          const uf = ufMap.get(ibgePrefix) || ''
          return { id, nome, uf }
        })
    }
  }

  get pragasByHospId() {
    return pragas
      .filter((praga) => this.species(praga.hosp, this.dados.hospSci))
      .map((praga) => praga.prag)
  }

  get listaNomesSci() {
    return ['', ...hospedeiros.map((v) => v.nomeSci)].sort((a, b) =>
      a.localeCompare(b),
    )
  }

  get listaNomesVul() {
    return ['', ...hospedeiros.flatMap((v) => v.nomeVul)].sort((a, b) =>
      a.localeCompare(b),
    )
  }

  get empty(): boolean {
    return this.result.length === 0
  }

  get origem() {
    return estados.filter(
      (estado) => estado.UF !== this.dados.dest || estado.UF === '',
    )
  }

  get destino() {
    return estados.filter(
      (estado) => estado.UF !== this.dados.orig || estado.UF === '',
    )
  }

  get municipiosOrigem() {
    if (!this.dados.orig) return []
    return this.municipios.filter((m) => m.uf === this.dados.orig)
  }

  get municipiosDestino() {
    if (!this.dados.dest) return []
    return this.municipios.filter((m) => m.uf === this.dados.dest)
  }

  species(pestHostIds: number[] | undefined, selectedNomeSci: string): boolean {
    if (!pestHostIds || pestHostIds.length === 0) return true
    if (!selectedNomeSci) return true

    const selectedGenus = selectedNomeSci.split(' ')[0]

    return pestHostIds.some((id) => {
      const pestHostName = hospedeiroSciMap.get(id)
      if (!pestHostName) return false
      const pestGenus = pestHostName.split(' ')[0]

      return (
        pestHostName === selectedNomeSci ||
        ((pestHostName.endsWith(' sp.') || pestHostName.endsWith(' spp.')) &&
          pestGenus === selectedGenus) ||
        ((selectedNomeSci.endsWith(' sp.') ||
          selectedNomeSci.endsWith(' spp.')) &&
          pestGenus === selectedGenus)
      )
    })
  }

  get completed(): boolean {
    return (
      Boolean(this.dados.hospSci) &&
      Boolean(this.dados.hospVul) &&
      Boolean(this.dados.prod) &&
      Boolean(this.dados.orig) &&
      Boolean(this.dados.dest)
    )
  }

  get partes(): string[] {
    const p = rules
      .filter((regra) => this.pragasByHospId.includes(regra.prag))
      .flatMap((regra) => regra.part)
    return ['', ...new Set(p)].sort((a: string, b: string) =>
      a.localeCompare(b),
    )
  }

  get result() {
    return rules.filter((exigen: any) => {
      const hostIds = pragas.find((p) => p.prag === exigen.prag)?.hosp

      const statusesOrigem = this.statusOrigemByPraga[exigen.prag] || []
      const statusesDestino = this.statusDestinoByPraga[exigen.prag] || []

      const matchesOrig =
        exigen.status_origem.includes('Todas as Áreas') ||
        statusesOrigem.some((sO) => exigen.status_origem.includes(sO))
      const matchesDest =
        exigen.status_destino.includes('Todas as Áreas') ||
        statusesDestino.some((sD) => exigen.status_destino.includes(sD))

      return (
        this.species(hostIds, this.dados.hospSci) &&
        exigen.part.includes(this.dados.prod) &&
        matchesOrig &&
        matchesDest
      )
    })
  }

  get statusOrigemByPraga() {
    const res: Record<string, string[]> = {}
    const id = this.getMunicipioId(this.dados.municipioOrigem, this.dados.orig)
    for (const praga of this.pragasByHospId) {
      res[praga] = this.resolveStatus(praga, id)
    }
    return res
  }

  get statusDestinoByPraga() {
    const res: Record<string, string[]> = {}
    const id = this.getMunicipioId(this.dados.municipioDestino, this.dados.dest)
    for (const praga of this.pragasByHospId) {
      res[praga] = this.resolveStatus(praga, id)
    }
    return res
  }

  private getMunicipioId(nomeOrId: string, uf: string): string {
    if (!uf) return ''
    if (!nomeOrId) return uf + '9999'

    // If it looks like a 6-digit IBGE code already, use it
    if (/^\d{6}$/.test(nomeOrId)) return nomeOrId

    // Accent-insensitive and case-insensitive matching
    const normalize = (s: string) =>
      s
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    const target = normalize(nomeOrId)

    const muni = this.municipios.find(
      (m) => normalize(m.nome) === target && m.uf === uf,
    )
    const id = muni?.id || (uf + '9999')

    if (!muni && nomeOrId && !['todos', 'qualquer'].includes(target)) {
      console.warn(
        `Município não encontrado: "${nomeOrId}" em ${uf}. Usando fallback ${id}`,
      )
    }

    return id
  }

  private resolveStatus(pragaName: string, municipioId: string): string[] {
    if (!municipioId || municipioId.length !== 6) return []

    const stateCode = municipioId.slice(0, 2)
    const muniPart = municipioId.slice(2, 6)
    const stateCodeNum = Number(stateCode)

    const pestEntry = (status_municipio as unknown as PestStatusEntry[]).find(
      (entry) => entry.praga === pragaName,
    )
    if (!pestEntry) return ['Área Sem Registro']

    const results: string[] = []

    for (const statusObj of pestEntry.status) {
      const statusTitle = statusObj.status_fitossanitário
      const stateMatch = statusObj.estados.find((e) => e.ibge === stateCodeNum)

      if (stateMatch) {
        const municipios = stateMatch.municipios
        if (municipios['9999'] === 'Todos' || municipios[muniPart]) {
          results.push(statusTitle)
        }
      }
    }

    if (results.length === 0) {
      return ['Área Sem Registro']
    }

    return results
  }

  clean(): void {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.hospId = 0
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
    this.dados.municipioOrigem = ''
    this.dados.municipioDestino = ''
  }

  updateHospedeiro(value: string, name: 'hospSci' | 'hospVul') {
    const host =
      name === 'hospSci'
        ? hospedeiros.find((hosp) => hosp.nomeSci === value)
        : hospedeiros.find((hosp) => hosp.nomeVul.includes(value))

    this.dados.hospId = host ? host.id : 0
    this.dados.prod = ''

    if (name === 'hospSci') {
      if (host) {
        if (!host.nomeVul.includes(this.dados.hospVul)) {
          this.dados.hospVul = host.nomeVul[0]
        }
      } else {
        this.dados.hospVul = ''
      }
    } else {
      this.dados.hospSci = host ? host.nomeSci : ''
    }
  }

  handleChanges(event: Event) {
    const target = event.currentTarget as HTMLSelectElement
    const { name, value } = target

    if (name === 'hospSci' || name === 'hospVul') {
      this.updateHospedeiro(value, name)
    }

    if (name in this.dados && name !== 'hospId') {
      this.dados[name as keyof Omit<Dados, 'hospId'>] = value
    }
  }

  handleMenu(i: string) {
    if (i === 'Base') {
      this.exibeBase = !this.exibeBase
    }
    if (i === 'Nova') {
      this.clean()
      this.searched = false
    }
    if (i === 'Voltar') {
      this.searched = false
    }
    if (i === 'Print') {
      window.print()
    }
  }

  handleSearch(event: Event) {
    if (!this.completed) {
      alert('Finalize a seleçao dos critérios para a consulta')
      event.preventDefault()
      return
    }
    if (process.env.NODE_ENV !== 'development') {
      window.gtag('event', 'search_hosp', {
        hospSci: this.dados.hospSci,
        prod: this.dados.prod,
        orig: this.dados.orig,
        dest: this.dados.dest,
      })
    }
    this.searched = true
    event.preventDefault()
  }
}

export const store = deepSignal(new Store())
