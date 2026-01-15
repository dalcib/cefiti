import { describe, expect, it } from './lib/expect.ts'
import { Store } from './store.ts'

describe('Store Edge Cases', () => {


  it('should match species with "spp." suffix', () => {
    const store = new Store()
    // Citrus sinensis should match "Citrus spp."
    expect(store.species(['Citrus spp.'], 'Citrus sinensis')).toBe(true)
    expect(store.species(['Citrus sp.'], 'Citrus sinensis')).toBe(true)
  })

  it('should auto-fill vulgar name when scientific name is selected', () => {
    const store = new Store()
    const event = {
      currentTarget: { name: 'hospSci', value: 'Citrus sinensis' },
    } as any
    store.handleChanges(event)
    expect(store.dados.hospVul).toBe('Laranja')
  })

  it('should auto-fill scientific name when vulgar name is selected', () => {
    const store = new Store()
    const event = { currentTarget: { name: 'hospVul', value: 'Laranja' } } as any
    store.handleChanges(event)
    expect(store.dados.hospSci).toBe('Citrus sinensis')
  })

  it('should correctly filter results for multi-state rules', () => {
    const store = new Store()

    // Scenario: Citrus sinensis from AC to AL (matches Mosca-da-carambola Rule 1)
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'frutos'
    store.dados.orig = 'AC'
    store.dados.dest = 'AL'

    expect(store.result.length).toBeGreaterThanOrEqual(1)
    expect(store.result[0].prag).toBe('Bactrocera carambolae')
  })

  it('should return empty result if part does not match', () => {
    const store = new Store()

    // Eugenia uniflora is host for Mosca-da-carambola but only for 'frutos'
    store.dados.hospSci = 'Eugenia uniflora'
    store.dados.prod = 'mudas'
    store.dados.orig = 'AC'
    store.dados.dest = 'AL'

    expect(store.result.length).toBe(0)
  })

  it('should handle specific destination matching', () => {
    const store = new Store()

    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'frutos'
    store.dados.orig = 'AC'
    store.dados.dest = 'AC' // Destination same as origin

    // By current logic, if dest is the same as orig, it's filtered out from available destinations 
    // BUT if manually set, it matches if it's in the rule list.
    // Rule 1 includes 'AC' in dest.
    expect(store.result.length).toBeGreaterThanOrEqual(1)
  })
})
