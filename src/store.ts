import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'
import { regras } from '../public/dbRegras.db'
import { pragas } from '../public/dbPragas.db'
import { hospedeiros } from '../public/dbHospedeiros.db'
import { estados } from './estados'

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
    return this.dbHospedeiros.filter(
      (hospedeiro) =>
        this.hospedeirosPragas.includes(hospedeiro.nomeSci) ||
        this.hospedeirosPragas.includes(
          `${hospedeiro.nomeSci.split(' ')[0]} sp.`
        ) ||
        this.hospedeirosPragas.includes(
          `${hospedeiro.nomeSci.split(' ')[0]} spp.`
        )
    )
  }

  get listaNomesSci() {
    return [
      '',
      ...this.hospedeirosRegulamentados
        .map((v) => v.nomeSci)
        .filter((i, x, a) => a.indexOf(i) === x)
        .sort((a, b) => a.localeCompare(b)),
    ]
  }

  get listaNomesVul() {
    return [
      '',
      ...this.hospedeirosRegulamentados
        .map((v) => v.nomeVul)
        .filter((i, x, a) => a.indexOf(i) === x)
        .sort((a, b) => a.localeCompare(b)),
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

  get gender(): string {
    return this.dados.hospSci.split(' ')[0]
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
      .filter(
        (exigen) =>
          exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(`${this.gender} sp.`) ||
          exigen.hosp.includes(`${this.gender} spp.`)
      )
      .flatMap((v) => v.part)
      .filter((i, x, a) => a.indexOf(i) === x)
      .concat([''])
      .sort((a: string, b: string) => a.localeCompare(b))
  }

  get result() {
    return this.db.filter((exigen) => {
      return (
        (exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(`${this.gender} sp.`) ||
          exigen.hosp.includes(`${this.gender} spp.`)) &&
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

  handleChanges(event: React.FormEvent<HTMLSelectElement>) {
    const target = event.currentTarget
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

  handleSearch(event: React.MouseEvent<HTMLButtonElement>) {
    if (!store.completed) {
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

export const store = proxy(new Store())

export function useStore() {
  return useProxy(store)
}
