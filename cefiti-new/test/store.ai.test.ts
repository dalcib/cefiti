import assert from 'node:assert/strict'
import { beforeEach, describe, it, mock } from 'node:test'
import { Store } from '../src/store.ts'

const mockWindow = {
  gtag: () => {}, // Empty function for gtag
  print: () => {}, //Empty function for print
}
globalThis.window = mockWindow as unknown as Window & typeof globalThis
globalThis.alert = ((message: string) => console.log(message)) as unknown as (
  message?: string,
) => void

describe('Store AI Tests', () => {
  let store: Store

  beforeEach(() => {
    store = new Store()
  })

  it('should initialize correctly', () => {
    assert.deepEqual(store.dados, {
      hospSci: '',
      hospVul: '',
      hospId: 0,
      prod: '',
      orig: '',
      dest: '',
      municipioOrigem: '',
      municipioOrigemId: '',
      municipioDestino: '',
      municipioDestinoId: '',
    })
    assert.strictEqual(store.exibeBase, false)
    assert.strictEqual(store.searched, false)
  })

  /* it('should calculate hospedeirosRegulamentados correctly', () => {
    assert.ok(store.hospedeirosRegulamentados.length >= 0)
  }) */

  it('should calculate listaNomesSci correctly', () => {
    assert.ok(store.listaNomesSci.length >= 1)
    assert.strictEqual(store.listaNomesSci[0], 'Acacia spp.')
  })

  it('should calculate listaNomesVul correctly', () => {
    assert.ok(store.listaNomesVul.length >= 1)
    assert.strictEqual(store.listaNomesVul[0], 'Abiu (C. cainito)')
  })

  it('should correctly determine empty state', () => {
    assert.strictEqual(store.empty, true)
    store.dados.hospSci = 'Citrus spp.'
    store.dados.hospVul = 'Citros'
    store.dados.hospId = 103
    store.dados.prod = 'frutos'
    store.dados.orig = 'AC'
    store.dados.dest = 'BA'
    // empty state depends on result length
    assert.strictEqual(store.empty, store.result.length === 0)
  })

  it('should return all estados correctly', () => {
    // estados in db-next.js has 27 entries
    assert.strictEqual(store.estados.length, 27)
    store.dados.dest = 'SP'
    // New logic: no more filtering, should still be 27
    assert.strictEqual(store.estados.length, 27)
  })

  it('should correctly determine completed state', () => {
    assert.strictEqual(store.completed, false)
    store.dados.hospSci = 'someSpecies'
    store.dados.hospVul = 'someVulgarName'
    store.dados.prod = 'someProduct'
    store.dados.orig = 'someOrigin'
    store.dados.dest = 'someDestination'
    assert.strictEqual(store.completed, true)
  })

  it('should clean the data correctly', () => {
    store.dados.hospSci = 'someValue'
    store.clean()
    assert.deepEqual(store.dados, {
      hospSci: '',
      hospVul: '',
      hospId: 0,
      prod: '',
      orig: '',
      dest: '',
      municipioOrigem: '',
      municipioOrigemId: '',
      municipioDestino: '',
      municipioDestinoId: '',
    })
  })

  it('should handle search correctly', () => {
    const preventDefault = mock.fn()
    const mockEvent = {
      preventDefault,
    } as unknown as Event

    store.handleSearch(mockEvent)
    assert.strictEqual(store.searched, false)
    assert.strictEqual(preventDefault.mock.callCount() > 0, true)

    // Complete the form
    store.dados.hospSci = 'Musa spp.'
    store.dados.hospVul = 'Banana'
    store.dados.hospId = 41
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.dest = 'SP'

    store.handleSearch(mockEvent)
    assert.strictEqual(store.searched, true)
  })
})
