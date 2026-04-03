import {
  type DB_PragaEstadoStatus,
  type DB_StatusFitossanitario,
  type DB_StatusMunicipio,
  type Estado,
  estados,
  type Hospedeiro,
  hospedeiros,
  type Legislacao,
  legislacoes,
  type Praga,
  pragas,
  type Rule,
  rules,
  status_municipio,
} from '#db-next'
import { deepSignal } from '../../cefiti/src/deep-signals.ts'
import { loadMunicipiosData, type Municipio } from './municipios.ts'
import type { Dados, PestSearchResult, RuleResult } from './types'

export type { Municipio }

export const hospedeiroSciMap = new Map<number, string>(
  (hospedeiros as Hospedeiro[]).map((h) => [h.id, h.nomeSci]),
)

export class StoreDb {
  dados: Dados = {
    hospSci: '',
    hospVul: '',
    hospId: 0,
    prod: '',
    orig: '',
    dest: '',
    municipioOrigem: '',
    municipioOrigemId: '',
    municipioDestino: '',
    municipioDestinoId: '',
  }
  municipios: Municipio[] = []

  constructor() {
    this.loadMunicipios()
  }

  async loadMunicipios() {
    const { municipios } = await loadMunicipiosData()
    this.municipios = municipios
  }

  get pragasByHospId(): string[] {
    return (pragas as Praga[])
      .filter((praga) => this.species(praga.hosp, this.dados.hospSci))
      .map((praga) => praga.prag)
  }

  get hostPragas(): string[] {
    return Array.from<string>(
      new Set((rules as Rule[]).map((regra) => regra.prag)),
    ).sort((a, b) => a.localeCompare(b))
  }

  get listaNomesSci() {
    return (hospedeiros as Hospedeiro[])
      .map((v) => v.nomeSci)
      .sort((a, b) => a.localeCompare(b))
  }

  get listaNomesVul() {
    return (hospedeiros as Hospedeiro[])
      .flatMap((v) => v.nomeVul)
      .sort((a, b) => a.localeCompare(b))
  }

  get empty(): boolean {
    return this.result.length === 0
  }

  get estados() {
    return estados as Estado[]
  }

  updateMunicipioSelection(
    field: 'municipioOrigem' | 'municipioDestino',
    name: string,
    id: string,
  ) {
    this.dados[field] = name
    this.dados[`${field}Id` as 'municipioOrigemId' | 'municipioDestinoId'] = id
  }

  get municipiosOrigem() {
    if (!this.dados.orig) return []
    this.municipios.length
    return this.municipios.filter((m) => m.uf === this.dados.orig)
  }

  get municipiosDestino() {
    if (!this.dados.dest) return []
    this.municipios.length
    return this.municipios.filter((m) => m.uf === this.dados.dest)
  }

  species(pestHostIds: number[] | undefined, selectedNomeSci: string): boolean {
    if (!pestHostIds || pestHostIds.length === 0) return true
    if (!selectedNomeSci) return true

    const selectedGenus = selectedNomeSci.split(' ')[0]

    return pestHostIds.some((id) => {
      const pestHostName = hospedeiroSciMap.get(id) as string
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
    const p = (rules as Rule[])
      .filter((regra) => this.pragasByHospId.includes(regra.prag))
      .flatMap((regra) => regra.part)
    return Array.from<string>(new Set(p)).sort((a: string, b: string) =>
      a.localeCompare(b),
    )
  }

  get result(): PestSearchResult[] {
    const filteredRules = (rules as Rule[]).filter((exigen) => {
      const hostIds = (pragas as Praga[]).find(
        (p) => p.prag === exigen.prag,
      )?.hosp

      const statusesOrigem = this.statusOrigemByPraga[exigen.prag] || []
      const statusesDestino = this.statusDestinoByPraga[exigen.prag] || []

      const matchesOrig =
        exigen.status_origem.includes('Todas as Áreas') ||
        statusesOrigem.some((sO) =>
          exigen.status_origem.includes(sO as DB_StatusFitossanitario),
        )
      const matchesDest =
        exigen.status_destino.includes('Todas as Áreas') ||
        statusesDestino.some((sD) =>
          exigen.status_destino.includes(sD as DB_StatusFitossanitario),
        )

      return (
        this.species(hostIds, this.dados.hospSci) &&
        exigen.part.includes(this.dados.prod) &&
        matchesOrig &&
        matchesDest
      )
    })

    const groupedResults: PestSearchResult[] = []
    const pestMap = new Map<string, PestSearchResult>()

    for (const exigen of filteredRules) {
      if (!pestMap.has(exigen.prag)) {
        const praga = (pragas as Praga[]).find((p) => p.prag === exigen.prag)
        if (!praga) throw new Error(`Praga not found: ${exigen.prag}`)
        const files = (praga.files || [])
          .map((fId: string) =>
            (legislacoes as Legislacao[]).find((l) => l.id === fId),
          )
          .filter((f: Legislacao | undefined): f is Legislacao => !!f)

        const pestInfo: PestSearchResult = {
          ...praga,
          files,
          rules: [],
        }
        pestMap.set(exigen.prag, pestInfo)
        groupedResults.push(pestInfo)
      }

      const pest = pestMap.get(exigen.prag)
      if (pest) {
        pest.rules.push({
          ...exigen,
          orig: exigen.status_origem,
          dest: exigen.status_destino,
        } as RuleResult)
      }
    }

    return groupedResults
  }

  get statusOrigemByPraga() {
    const res: Record<string, string[]> = {}
    const id = this.dados.municipioOrigemId
    for (const praga of this.pragasByHospId) {
      res[praga] = this.resolveStatus(praga, id)
    }
    return res
  }

  get statusDestinoByPraga() {
    const res: Record<string, string[]> = {}
    const id = this.dados.municipioDestinoId
    for (const praga of this.pragasByHospId) {
      res[praga] = this.resolveStatus(praga, id)
    }
    return res
  }

  private resolveStatus(
    pragaName: string,
    municipioId: string,
  ): DB_StatusFitossanitario[] {
    if (!municipioId || municipioId.length !== 6) return []

    const stateCode = municipioId.slice(0, 2)
    const muniPart = municipioId.slice(2, 6)
    const stateCodeNum = Number(stateCode)

    const pestEntry = (
      status_municipio as unknown as DB_StatusMunicipio[]
    ).find((entry) => entry.praga === pragaName)
    if (!pestEntry) return ['Área Sem Registro']

    const results: DB_StatusFitossanitario[] = []

    for (const statusObj of pestEntry.status) {
      const statusTitle =
        statusObj.status_fitossanitário as DB_StatusFitossanitario
      const stateMatch = statusObj.estados.find(
        (e: DB_PragaEstadoStatus) =>
          e.ibge === stateCodeNum || e.id === stateCodeNum,
      )

      if (stateMatch) {
        const municipios = stateMatch.municipios
        const isTodos = Object.entries(municipios).some(
          ([k, v]) =>
            (k === '9999' || k === 'Todos') &&
            (v === 'Todos' ||
              v === 'Tudo' ||
              v === statusTitle ||
              v === 'Liberado'),
        )

        if (isTodos || municipios[muniPart] || municipios[municipioId]) {
          results.push(statusTitle)
        }
      }
    }

    if (results.length === 0) return ['Área Sem Registro']
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
    this.dados.municipioOrigemId = ''
    this.dados.municipioDestino = ''
    this.dados.municipioDestinoId = ''
  }

  updateHospedeiro(value: string, name: 'hospSci' | 'hospVul') {
    const host =
      name === 'hospSci'
        ? (hospedeiros as Hospedeiro[]).find((hosp) => hosp.nomeSci === value)
        : (hospedeiros as Hospedeiro[]).find((hosp) =>
            hosp.nomeVul.includes(value),
          )

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
      const val = value as string
      this.dados[name as keyof Omit<Dados, 'hospId'>] = val

      if (name === 'orig') {
        this.dados.municipioOrigem = ''
        const state = (estados as Estado[]).find((e) => e.UF === val)
        this.dados.municipioOrigemId = state ? `${state.ibge}9999` : ''
      }
      if (name === 'dest') {
        this.dados.municipioDestino = ''
        const state = (estados as Estado[]).find((e) => e.UF === val)
        this.dados.municipioDestinoId = state ? `${state.ibge}9999` : ''
      }
    }
  }

  handleSearch(onSuccess: () => void) {
    if (!this.completed) {
      alert('Finalize a seleção dos critérios para a consulta')
      return
    }

    if (process.env.NODE_ENV !== 'development') {
      window.gtag('event', 'search_hosp', {
        hospSci: this.dados.hospSci,
        prod: this.dados.prod,
        orig: this.dados.orig,
        dest: this.dados.dest,
        pragas: Object.fromEntries(
          this.result.map((p) => [p.prag, p.pragc || '']),
        ),
      })
    }

    onSuccess()
  }
}

export const storeDb = deepSignal(new StoreDb())
