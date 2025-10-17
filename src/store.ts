import { deepSignal } from 'deepsignal'
import { regras } from '../public/dbRegras.db.js'
import { pragas } from '../public/dbPragas.db.js'
import { hospedeiros } from '../public/dbHospedeiros.db.js'
import { estados } from './estados.ts'

export class Store {
  dbRegras: Regra[] = regras
  dbHospedeiros: Hospedeiro[] = hospedeiros
  dbPragas: Praga[] = pragas
  estados = estados
  db: Db[] = this.dbRegras.map((regra) => ({
    ...this.dbPragas.find((item) => item.prag === regra.prag),
    ...regra,
  })) as Db[]
  dados: Dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }
  exibeBase: boolean = false
  searched: boolean = false

  get hospedeirosPragas() {
    return this.dbPragas.flatMap((praga) => praga.hosp)
  }

  get hospedeirosRegulamentados() {
    return this.dbHospedeiros.filter((hospedeiro) =>
      this.species(this.hospedeirosPragas, hospedeiro.nomeSci)
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
    return this.estados.filter(
      (estado) => estado.UF !== this.dados.dest || estado.UF === ''
    )
  }

  get destino() {
    return this.estados.filter(
      (estado) => estado.UF !== this.dados.orig || estado.UF === ''
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
    return this.db
      .filter((exigen) => this.species(exigen.hosp, this.dados.hospSci))
      .flatMap((v) => v.part.concat(['']))
      .filter((i, x, a) => a.indexOf(i) === x) // Keep unique after adding empty string
      .sort((a: string, b: string) => a.localeCompare(b))
  }

  get result() {
    return this.db.filter((exigen) => {
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
      store.clean()
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
      //window.ga('send', 'event', 'search', 'click', store.dados.hospSci)
      window.gtag('event', 'click', {
        eventCategory: 'search',
        dimension5: store.dados.hospSci,
      })
      //console.log('click', process.env.NODE_ENV, store.dados.hospSci)
    }
    this.searched = true
    event.preventDefault()
  }
}

//deepSignal only accepts plain objects, so we need to clone the Store class
//and remove the constructor to avoid issues with deepSignal
function clone(source: Store) {
  let descriptors: Record<string, PropertyDescriptor> = {}
  for (
    let p = source;
    p && p !== Object.prototype;
    p = Object.getPrototypeOf(p)
  ) {
    descriptors = { ...Object.getOwnPropertyDescriptors(p), ...descriptors }
  }
  delete descriptors['constructor']
  return Object.defineProperties({}, descriptors) as Store
}

export const store = deepSignal<Store>(clone(new Store()))
