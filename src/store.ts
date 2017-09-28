import { observable, computed, useStrict, action } from 'mobx'
import 'js-plus'
import { exig, dados, estados, hospedeiro, Event } from './cefiti'
//import {db, hospedeiros} from './db'

declare var db: exig[]
declare var hospedeiros: hospedeiro[]
declare var version: string

useStrict(true)

export class Store {
  db: exig[] = db
  dbVersion = version
  appVersion = '3.6'
  hospedeiros: hospedeiro[] = hospedeiros
  listaNomesSci: string[] = hospedeiros
    .unique('nomeSci')
    .sort((a, b) => a.localeCompare(b))
  listaNomesVul: string[] = hospedeiros
    .unique('nomeVul')
    .sort((a, b) => a.localeCompare(b))

  @observable
  dados: dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }

  @computed
  get empty(): boolean {
    return this.result.length === 0
  }

  @computed
  get origem(): estados[] {
    return this.estados.filter(
      estado => estado.UF !== this.dados.dest || estado.UF === ''
    )
  }

  @computed
  get destino(): estados[] {
    return this.estados.filter(
      estado => estado.UF !== this.dados.orig || estado.UF === ''
    )
  }

  @computed
  get gender(): string {
    return this.dados.hospSci.split(' ')[0]
  }

  @computed
  get completed(): boolean {
    return (
      Boolean(this.dados.hospSci) &&
      Boolean(this.dados.hospVul) &&
      Boolean(this.dados.prod) &&
      Boolean(this.dados.orig) &&
      Boolean(this.dados.dest)
    )
  }

  @computed
  get partes(): string[] {
    return db
      .filter(
        (exigen: exig) =>
          exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(this.gender + ' sp.') ||
          exigen.hosp.includes(this.gender + ' spp.')
      )
      .by('part')
      .flatten()
      .unique()
      .concat([''])
      .sort((a: string, b: string) => a.localeCompare(b))
  }

  @computed
  get result(): exig[] {
    return db.filter((exigen: exig) => {
      return (
        (exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(this.gender + ' sp.') ||
          exigen.hosp.includes(this.gender + ' spp.')) &&
        exigen.orig.includes(this.dados.orig) &&
        exigen.dest.includes(this.dados.dest) &&
        exigen.part.includes(this.dados.prod)
      )
    })
  }

  estados: estados[] = [
    { estado: '', UF: '' },
    { estado: 'Acre', UF: 'AC' },
    { estado: 'Alagoas', UF: 'AL' },
    { estado: 'Amazonas', UF: 'AM' },
    { estado: 'Amapá', UF: 'AP' },
    { estado: 'Bahia', UF: 'BA' },
    { estado: 'Ceará', UF: 'CE' },
    { estado: 'Distrito Federal', UF: 'DF' },
    { estado: 'Espirito Santo', UF: 'ES' },
    { estado: 'Goiás', UF: 'GO' },
    { estado: 'Maranhão', UF: 'MA' },
    { estado: 'Minas Gerais', UF: 'MG' },
    { estado: 'Mato Grosso do Sul', UF: 'MS' },
    { estado: 'Mato Grosso', UF: 'MT' },
    { estado: 'Pará', UF: 'PA' },
    { estado: 'Paraíba', UF: 'PB' },
    { estado: 'Pernambuco', UF: 'PE' },
    { estado: 'Piauí', UF: 'PI' },
    { estado: 'Paraná', UF: 'PR' },
    { estado: 'Rio de janeiro', UF: 'RJ' },
    { estado: 'Rio Grande do Norte', UF: 'RN' },
    { estado: 'Rondônia', UF: 'RO' },
    { estado: 'Roraima', UF: 'RR' },
    { estado: 'Rio Grande do Sul', UF: 'RS' },
    { estado: 'Santa Catarina', UF: 'SC' },
    { estado: 'Sergipe', UF: 'SE' },
    { estado: 'São Paulo', UF: 'SP' },
    { estado: 'Tocantins', UF: 'TO' },
  ]

  @action
  handleChanges = (event: Event): void => {
    switch (event.target.name) {
      case 'hospSci':
        const hospVulg: hospedeiro | undefined = this.hospedeiros.find(
          hosp => hosp.nomeSci === event.target.value
        )
        this.dados.hospVul = hospVulg ? hospVulg.nomeVul : ''
        break
      case 'hospVul':
        const hospSci = this.hospedeiros.find(
          hosp => hosp.nomeVul === event.target.value
        )
        this.dados.hospSci = hospSci ? hospSci.nomeSci : ''
        break
      default:
        break
    }
    store.dados[event.target.name] = event.target.value
  }

  @action
  clean(): void {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
  }
}

export const store = new Store()
export default store
