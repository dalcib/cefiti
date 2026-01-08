import { signal, computed, type Signal } from '@preact/signals'
import { deepSignal } from 'deepsignal'
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
  private _dados: Dados
  private _exibeBase: Signal<boolean>
  private _searched: Signal<boolean>

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
    this._dados = deepSignal({
      hospSci: '',
      hospVul: '',
      prod: '',
      orig: '',
      dest: '',
    })
    this._exibeBase = signal(false)
    this._searched = signal(false)
  }

  // Getters for base data
  get dbRegras() { return this._dbRegras.value }
  get dbHospedeiros() { return this._dbHospedeiros.value }
  get dbPragas() { return this._dbPragas.value }
  get estados() { return this._estados.value }
  
  // State getters/setters
  get dados() { return this._dados }
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
      (estado) => estado.UF !== this.dados.dest || estado.UF === ''
    )
  )
  get origem() { return this._origem.value }

  private _destino = computed(() =>
    this.estados.filter(
      (estado) => estado.UF !== this.dados.orig || estado.UF === ''
    )
  )
  get destino() { return this._destino.value }

  get gender() {
    return this.dados.hospSci.split(' ')[0]
  }

  species(species: string[], nomeSci: string): boolean {
    return (
      species.includes(nomeSci) ||
      species.includes(`${nomeSci.split(' ')[0]} sp.`) ||
      species.includes(`${nomeSci.split(' ')[0]} spp.`)
    )
  }

  private _completed = computed(() =>
    Boolean(this.dados.hospSci) &&
    Boolean(this.dados.hospVul) &&
    Boolean(this.dados.prod) &&
    Boolean(this.dados.orig) &&
    Boolean(this.dados.dest)
  )
  get completed() { return this._completed.value }

  private _partes = computed(() => {
    const p = this.db
      .filter((exigen) => this.species(exigen.hosp, this.dados.hospSci))
      .flatMap((v) => v.part)

    return ['', ...new Set(p)].sort((a: string, b: string) =>
      a.localeCompare(b)
    )
  })
  get partes() { return this._partes.value }

  private _result = computed(() =>
    this.db.filter((exigen) => {
      return (
        this.species(exigen.hosp, this.dados.hospSci) &&
        exigen.orig.includes(this.dados.orig) &&
        exigen.dest.includes(this.dados.dest) &&
        exigen.part.includes(this.dados.prod)
      )
    })
  )
  get result() { return this._result.value }

  clean(): void {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
  }

  handleChanges(event: Event) {
    const target = event.currentTarget as HTMLSelectElement
    switch (target.name) {
      case 'hospSci':
        {
          const hospVulg = this.dbHospedeiros.find(
            (hosp) => hosp.nomeSci === target.value
          )
          this.dados.prod = ''
          this.dados.hospVul = hospVulg ? hospVulg.nomeVul : ''
        }
        break
      case 'hospVul':
        {
          const hospSci = this.dbHospedeiros.find(
            (hosp) => hosp.nomeVul === target.value
          )
          this.dados.prod = ''
          this.dados.hospSci = hospSci ? hospSci.nomeSci : ''
        }
        break
      default:
        break
    }
    // @ts-expect-error - index access
    this.dados[target.name as keyof Dados] = target.value
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
        dimension5: this.dados.hospSci,
      })
    }
    this.searched = true
    event.preventDefault()
  }
}

export const store = new Store()