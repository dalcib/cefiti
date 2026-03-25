import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { Store } from '../src/store.ts'

describe('Store Edge Cases', () => {
  it('should match species with "spp." suffix', async () => {
    const store = new Store()
    await store.loadMunicipios()
    // Citrus spp. is ID 103. Citrus sinensis should match it.
    assert.strictEqual(store.species([103], 'Citrus sinensis'), true)

    // Sorbus sp. is ID 102. Sorbus species should match it.
    assert.strictEqual(store.species([102], 'Sorbus aucuparia'), true)
  })

  it('should auto-fill vulgar name when scientific name is selected', () => {
    const store = new Store()
    const event = {
      currentTarget: { name: 'hospSci', value: 'Citrus sinensis' },
    } as unknown as Event
    store.handleChanges(event)
    assert.strictEqual(store.dados.hospVul, 'Laranja')
    assert.strictEqual(store.dados.hospId, 138)
  })

  it('should auto-fill scientific name when vulgar name is selected', () => {
    const store = new Store()
    const event = {
      currentTarget: { name: 'hospVul', value: 'Laranja' },
    } as unknown as Event
    store.handleChanges(event)
    assert.strictEqual(store.dados.hospSci, 'Citrus sinensis')
    assert.strictEqual(store.dados.hospId, 138)
  })

  it('should correctly filter results for multi-state rules', async () => {
    const store = new Store()
    await store.loadMunicipios()

    // Scenario: Citrus sinensis from AP to AL
    // Citrus sinensis ID is 138.
    // AP is ACO for Carambolae (169999).
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.hospId = 138
    store.dados.prod = 'frutos'
    store.dados.orig = 'AP'
    store.dados.dest = 'AL'
    store.dados.municipioOrigem = '' // AP "All"
    store.dados.municipioDestino = '' // AL "All"

    assert.ok(store.result.length >= 1)
    assert.ok(store.result.some((r) => r.prag === 'Bactrocera carambolae'))
  })

  it('should return empty result if part does not match', async () => {
    const store = new Store()
    await store.loadMunicipios()

    // Eugenia uniflora (ID 179) is host for Mosca-da-carambola but only for 'frutos' in many rules
    store.dados.hospSci = 'Eugenia uniflora'
    store.dados.hospId = 179
    store.dados.prod = 'mudas'
    store.dados.orig = 'AP'
    store.dados.dest = 'AL'
    store.dados.municipioOrigem = ''
    store.dados.municipioDestino = ''

    assert.strictEqual(store.result.length, 0)
  })

  it('should handle specific destination matching', async () => {
    const store = new Store()
    await store.loadMunicipios()

    store.dados.hospSci = 'Citrus sinensis'
    store.dados.hospId = 138
    store.dados.prod = 'frutos'
    store.dados.orig = 'AP'
    store.dados.dest = 'AP' // Destination same as origin
    store.dados.municipioOrigem = ''
    store.dados.municipioDestino = ''

    // Rule 1 matches "Todas as Áreas" as destination, and "Área Com Ocorrência" as origin.
    // AP matches ACO.
    assert.ok(store.result.length >= 1)
  })
})
