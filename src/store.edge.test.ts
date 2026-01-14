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
    const event = { currentTarget: { name: 'hospVul', value: 'Limão' } } as any
    store.handleChanges(event)
    expect(store.dados.hospSci).toBe('Citrus limon')
  })

  it('should correctly filter results for multi-state rules', () => {
    const store = new Store()

    // Scenario: Orange (Citrus sinensis) from SP to BA
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'fruits'
    store.dados.orig = 'SP'
    store.dados.dest = 'BA'

    expect(store.result.length).toBe(1)
    expect(store.result[0].prag).toBe('Pest 1')
  })

  it('should return empty result if part does not match', () => {
    const store = new Store()

    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'leaves' // Not in mockRegras
    store.dados.orig = 'SP'
    store.dados.dest = 'BA'

    expect(store.result.length).toBe(0)
  })

  it('should handle specific destination matching', () => {
    const store = new Store()

    store.dados.hospSci = 'Citrus limon'
    store.dados.prod = 'plants'
    store.dados.orig = 'RR'
    store.dados.dest = 'SP'

    // Pest 2 has dest: ['ANY'], user selected 'SP'. No match expected by current logic.
    expect(store.result.length).toBe(0)
  })
})
