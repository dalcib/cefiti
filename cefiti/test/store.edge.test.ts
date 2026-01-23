import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { Store } from '../src/store.ts'

describe('Store Edge Cases', () => {
  it('should match species with "spp." suffix', () => {
    const store = new Store()
    // Citrus sinensis should match "Citrus spp."
    assert.strictEqual(store.species(['Citrus spp.'], 'Citrus sinensis'), true)
    assert.strictEqual(store.species(['Citrus sp.'], 'Citrus sinensis'), true)
  })

  it('should auto-fill vulgar name when scientific name is selected', () => {
    const store = new Store()
    const event = {
      currentTarget: { name: 'hospSci', value: 'Citrus sinensis' },
    } as unknown as Event
    store.handleChanges(event)
    assert.strictEqual(store.dados.hospVul, 'Laranja')
  })

  it('should auto-fill scientific name when vulgar name is selected', () => {
    const store = new Store()
    const event = {
      currentTarget: { name: 'hospVul', value: 'Laranja' },
    } as unknown as Event
    store.handleChanges(event)
    assert.strictEqual(store.dados.hospSci, 'Citrus sinensis')
  })

  it('should correctly filter results for multi-state rules', () => {
    const store = new Store()

    // Scenario: Citrus sinensis from AC to AL (matches Mosca-da-carambola Rule 1)
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'frutos'
    store.dados.orig = 'AC'
    store.dados.dest = 'AL'

    assert.ok(store.result.length >= 1)
    assert.strictEqual(store.result[0].prag, 'Bactrocera carambolae')
  })

  it('should return empty result if part does not match', () => {
    const store = new Store()

    // Eugenia uniflora is host for Mosca-da-carambola but only for 'frutos'
    store.dados.hospSci = 'Eugenia uniflora'
    store.dados.prod = 'mudas'
    store.dados.orig = 'AC'
    store.dados.dest = 'AL'

    assert.strictEqual(store.result.length, 0)
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
    assert.ok(store.result.length >= 1)
  })
})
