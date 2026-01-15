import { hospedeiros } from './dbHospedeiros.db.js'
import { pragas } from './dbPragas.db.js'
import { regras } from './dbRegras.db.js'
import { estados } from './estados.ts'
import { deepSignal } from './lib/fast-deep-signal.ts'

const db = regras.map((regra) => ({
  ...pragas.find((item) => item.id === regra.idprag),
  ...regra,
})) as Db[]

export class Store {
  dados: Dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }
  exibeBase: boolean = false
  searched: boolean = false

  constructor() { }

  get hospedeirosPragas() {
    return pragas.flatMap((praga) => praga.hosp)
  }

  get hospedeirosRegulamentados() {
    return hospedeiros.filter((hospedeiro) =>
      this.species(this.hospedeirosPragas, hospedeiro.nomeSci),
    )
  }

  get listaNomesSci() {
    return [
      '',
      ...[
        ...new Set(this.hospedeirosRegulamentados.map((v) => v.nomeSci)),
      ].sort((a, b) => a.localeCompare(b)),
    ]
  }

  get listaNomesVul() {
    return [
      '',
      ...[
        ...new Set(this.hospedeirosRegulamentados.map((v) => v.nomeVul)),
      ].sort((a, b) => a.localeCompare(b)),
    ]
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
    const p = db
      .filter((exigen) => this.species(exigen.hosp, this.dados.hospSci))
      .flatMap((v) => v.part)

    // Ensure empty string is always included
    return ['', ...new Set(p)].sort((a: string, b: string) =>
      a.localeCompare(b),
    )
  }

  get result() {
    return db.filter((exigen) => {
      return (
        this.species(exigen.hosp, this.dados.hospSci) &&
        exigen.orig.includes(this.dados.orig) &&
        exigen.dest.includes(this.dados.dest) &&
        exigen.part.includes(this.dados.prod)
      )
    })
  }

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
          const hospVulg = hospedeiros.find(
            (hosp) => hosp.nomeSci === target.value,
          )
          this.dados.prod = ''
          this.dados.hospVul = hospVulg ? hospVulg.nomeVul : ''
        }
        break
      case 'hospVul':
        {
          const hospSci = hospedeiros.find(
            (hosp) => hosp.nomeVul === target.value,
          )
          this.dados.prod = ''
          this.dados.hospSci = hospSci ? hospSci.nomeSci : ''
          break
        }
        break
      default:
        break
    }
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

export const store = deepSignal(new Store())
