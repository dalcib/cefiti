import { describe, expect, it } from './expect.ts'
import { Store } from './store.ts'

describe('Store Refactoring', () => {
  it('should allow initialization with data arrays', () => {
    const mockRegras: Regra[] = [
      {
        desc: 'Regra 1',
        prag: 'Praga 1',
        part: ['frutos'],
        orig: ['AC'],
        dest: ['BA'],
        exig: ['Livre'],
      },
    ]
    const mockPragas: Praga[] = [
      {
        prag: 'Praga 1',
        pragc: 'Praga Comum 1',
        hosp: ['Citrus spp.'],
        files: [],
      },
    ]
    const mockHospedeiros: Hospedeiro[] = [
      { nomeSci: 'Citrus spp.', nomeVul: 'Citros', count: 1 },
    ]
    const mockEstados: Estado[] = [
      { estado: 'Acre', UF: 'AC' },
      { estado: 'Bahia', UF: 'BA' },
    ]

    const store = new Store(
      mockRegras,
      mockPragas,
      mockHospedeiros,
      mockEstados,
    )

    expect(store.dbRegras).toEqual(mockRegras)
    expect(store.dbPragas).toEqual(mockPragas)
    expect(store.dbHospedeiros).toEqual(mockHospedeiros)
    expect(store.estados).toEqual(mockEstados)

    // Check if db (merged) is correct
    expect(store.db[0].pragc).toBe('Praga Comum 1')
  })

  it('should be reactive when updating dados fields', () => {
    const store = new Store()
    const callCount = 0
    // Accessing a computed property that depends on dados
    const _ = store.completed

    store.dados.hospSci = 'Citrus spp.'
    store.dados.hospVul = 'Citros'
    store.dados.prod = 'frutos'
    store.dados.orig = 'AC'
    store.dados.dest = 'BA'

    expect(store.completed).toBe(true)
  })
})
