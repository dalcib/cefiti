import { signal, computed, type Signal, type ReadonlySignal } from '@preact/signals'
// @ts-expect-error external file
import { regras as defaultRegras } from './dbRegras.db.js'
// @ts-expect-error external file
import { pragas as defaultPragas } from './dbPragas.db.js'
// @ts-expect-error external file
import { hospedeiros as defaultHospedeiros } from './dbHospedeiros.db.js'
import { estados as defaultEstados } from './estados.ts'

export class Store {
  private _dbRegras: Signal<Regra[]>
  private _dbHospedeiros: Signal<Hospedeiro[]>
  private _dbPragas: Signal<Praga[]>
  private _estados: Signal<Estado[]>

  // Individual signals for dados fields
  private _hospSci = signal('')
  private _hospVul = signal('')
  private _prod = signal('')
  private _orig = signal('')
  private _dest = signal('')

  private _exibeBase = signal(false)
  private _searched = signal(false)

  // Proxy object for backward compatibility
  private _dadosProxy: Dados

  constructor(
    regras: Regra[] = defaultRegras,
    pragas: Praga[] = defaultPragas,
    hospedeiros: Hospedeiro[] = defaultHospedeiros,
    est: Estado[] = defaultEstados
  ) {
    this._dbRegras = signal(regras)
    this._dbPragas = signal(pragas)
    this._dbHospedeiros = signal(hospedeiros)
    this._estados = signal(est)

    const self = this
    this._dadosProxy = new Proxy({} as Dados, {
      get(_, prop) {
        switch (prop) {
          case 'hospSci': return self._hospSci.value
          case 'hospVul': return self._hospVul.value
          case 'prod': return self._prod.value
          case 'orig': return self._orig.value
          case 'dest': return self._dest.value
          default: return undefined
        }
      },
      set(_, prop, value) {
        switch (prop) {
          case 'hospSci': self._hospSci.value = value; break
          case 'hospVul': self._hospVul.value = value; break
          case 'prod': self._prod.value = value; break
          case 'orig': self._orig.value = value; break
          case 'dest': self._dest.value = value; break
          default: return false
        }
        return true
      },
      ownKeys() {
        return ['hospSci', 'hospVul', 'prod', 'orig', 'dest']
      },
      getOwnPropertyDescriptor(_, prop) {
        if (['hospSci', 'hospVul', 'prod', 'orig', 'dest'].includes(prop as string)) {
          return {
            enumerable: true,
            configurable: true,
          }
        }
        return undefined
      }
    })
  }

  // Getters for base data
  get dbRegras() { return this._dbRegras.value }
  get dbHospedeiros() { return this._dbHospedeiros.value }
  get dbPragas() { return this._dbPragas.value }
  get estados() { return this._estados.value }

  // State accessors
  get dados() { return this._dadosProxy }
  
  get exibeBase() { return this._exibeBase.value }
  set exibeBase(v) { this._exibeBase.value = v }
  get searched() { return this._searched.value }
  set searched(v) { this._searched.value = v }

  // Computed signals
  private _db = computed(() =>
    this._dbRegras.value.map((regra) => ({
      ...this._dbPragas.value.find((item) => item.prag === regra.prag),
      ...regra,
    })) as Db[]
  )
  get db() { return this._db.value }

  private _hospedeirosPragas = computed(() =>
    this._dbPragas.value.flatMap((praga) => praga.hosp)
  )
  get hospedeirosPragas() { return this._hospedeirosPragas.value }

  private _hospedeirosRegulamentados = computed(() =>
    this._dbHospedeiros.value.filter((hospedeiro) =>
      this.species(this._hospedeirosPragas.value, hospedeiro.nomeSci)
    )
  )
  get hospedeirosRegulamentados() { return this._hospedeirosRegulamentados.value }

  private _listaNomesSci = computed(() => [
    '',
    ...[
      ...new Set(this.hospedeirosRegulamentados.map((v) => v.nomeSci)),
    ].sort((a, b) => a.localeCompare(b)),
  ])
  get listaNomesSci() { return this._listaNomesSci.value }

  private _listaNomesVul = computed(() => [
    '',
    ...[
      ...new Set(this.hospedeirosRegulamentados.map((v) => v.nomeVul)),
    ].sort((a, b) => a.localeCompare(b)),
  ])
  get listaNomesVul() { return this._listaNomesVul.value }

  get empty(): boolean {
    return this.result.length === 0
  }

  private _origem = computed(() =>
    this.estados.filter(
      (estado) => estado.UF !== this._dest.value || estado.UF === ''
    )
  )
  get origem() { return this._origem.value }

  private _destino = computed(() =>
    this.estados.filter(
      (estado) => estado.UF !== this._orig.value || estado.UF === ''
    )
  )
  get destino() { return this._destino.value }

  get gender() {
    return this._hospSci.value.split(' ')[0]
  }

  species(species: string[], nomeSci: string): boolean {
    return (
      species.includes(nomeSci) ||
      species.includes(`${nomeSci.split(' ')[0]} sp.`) ||
      species.includes(`${nomeSci.split(' ')[0]} spp.`)
    )
  }

  private _completed = computed(() =>
    Boolean(this._hospSci.value) &&
    Boolean(this._hospVul.value) &&
    Boolean(this._prod.value) &&
    Boolean(this._orig.value) &&
    Boolean(this._dest.value)
  )
  get completed() { return this._completed.value }

  private _partes = computed(() => {
    const p = this.db
      .filter((exigen) => this.species(exigen.hosp, this._hospSci.value))
      .flatMap((v) => v.part)

    return ['', ...new Set(p)].sort((a: string, b: string) =>
      a.localeCompare(b)
    )
  })
  get partes() { return this._partes.value }

  private _result = computed(() =>
    this.db.filter((exigen) => {
      return (
        this.species(exigen.hosp, this._hospSci.value) &&
        exigen.orig.includes(this._orig.value) &&
        exigen.dest.includes(this._dest.value) &&
        exigen.part.includes(this._prod.value)
      )
    })
  )
  get result() { return this._result.value }

  clean(): void {
    this._hospSci.value = ''
    this._hospVul.value = ''
    this._prod.value = ''
    this._orig.value = ''
    this._dest.value = ''
  }

  handleChanges(event: Event) {
    const target = event.currentTarget as HTMLSelectElement
    const value = target.value
    
    if (target.name === 'hospSci') {
      const hospVulg = this.dbHospedeiros.find(
        (hosp) => hosp.nomeSci === value
      )
      this._prod.value = ''
      this._hospVul.value = hospVulg ? hospVulg.nomeVul : ''
    } else if (target.name === 'hospVul') {
      const hospSci = this.dbHospedeiros.find(
        (hosp) => hosp.nomeVul === value
      )
      this._prod.value = ''
      this._hospSci.value = hospSci ? hospSci.nomeSci : ''
    }

    switch (target.name) {
      case 'hospSci': this._hospSci.value = value; break
      case 'hospVul': this._hospVul.value = value; break
      case 'prod': this._prod.value = value; break
      case 'orig': this._orig.value = value; break
      case 'dest': this._dest.value = value; break
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
      window.gtag('event', 'click', {
        eventCategory: 'search',
        dimension5: this._hospSci.value,
      })
    }
    this.searched = true
    event.preventDefault()
  }
}

export const store = new Store()