import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import { StoreDb } from '../src/store-db.ts'
import { StoreUi } from '../src/store-ui.ts'

const mockWindow = {
  gtag: () => {}, // Empty function for gtag
  print: () => {}, //Empty function for print
  addEventListener: () => {},
  removeEventListener: () => {},
  location: { hash: '', protocol: 'file:' },
  history: { pushState: () => {} },
}
globalThis.window = mockWindow as unknown as Window & typeof globalThis
globalThis.alert = ((message: string) => console.log(message)) as unknown as (
  message?: string,
) => void

describe('Store AI Tests', () => {
  let storeDb: StoreDb
  let storeUi: StoreUi

  beforeEach(() => {
    storeDb = new StoreDb()
    storeUi = new StoreUi()
  })

  it('should initialize correctly', () => {
    assert.deepEqual(storeDb.dados, {
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
    assert.strictEqual(storeUi.exibeBase, false)
    assert.strictEqual(storeUi.searched, false)
  })

  /* it('should calculate hospedeirosRegulamentados correctly', () => {
    assert.ok(store.hospedeirosRegulamentados.length >= 0)
  }) */

  it('should calculate listaNomesSci correctly', () => {
    assert.ok(storeDb.listaNomesSci.length >= 1)
    assert.strictEqual(storeDb.listaNomesSci[0], 'Acacia spp.')
  })

  it('should calculate listaNomesVul correctly', () => {
    assert.ok(storeDb.listaNomesVul.length >= 1)
    assert.strictEqual(storeDb.listaNomesVul[0], 'Abiu (C. cainito)')
  })

  it('should correctly determine empty state', () => {
    assert.strictEqual(storeDb.empty, true)
    storeDb.dados.hospSci = 'Citrus spp.'
    storeDb.dados.hospVul = 'Citros'
    storeDb.dados.hospId = 103
    storeDb.dados.prod = 'frutos'
    storeDb.dados.orig = 'AC'
    storeDb.dados.dest = 'BA'
    // empty state depends on result length
    assert.strictEqual(storeDb.empty, storeDb.result.length === 0)
  })

  it('should return all estados correctly', () => {
    // estados in db-next.js has 27 entries
    assert.strictEqual(storeDb.estados.length, 27)
    storeDb.dados.dest = 'SP'
    // New logic: no more filtering, should still be 27
    assert.strictEqual(storeDb.estados.length, 27)
  })

  it('should correctly determine completed state', () => {
    assert.strictEqual(storeDb.completed, false)
    storeDb.dados.hospSci = 'someSpecies'
    storeDb.dados.hospVul = 'someVulgarName'
    storeDb.dados.prod = 'someProduct'
    storeDb.dados.orig = 'someOrigin'
    storeDb.dados.dest = 'someDestination'
    assert.strictEqual(storeDb.completed, true)
  })

  it('should clean the data correctly', () => {
    storeDb.dados.hospSci = 'someValue'
    storeDb.clean()
    assert.deepEqual(storeDb.dados, {
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
    storeDb.handleSearch(() => storeUi.navigate('result'))
    assert.strictEqual(storeUi.searched, false)

    // Complete the form
    storeDb.dados.hospSci = 'Musa spp.'
    storeDb.dados.hospVul = 'Banana'
    storeDb.dados.hospId = 41
    storeDb.dados.prod = 'frutos'
    storeDb.dados.orig = 'MG'
    storeDb.dados.dest = 'SP'

    storeDb.handleSearch(() => storeUi.navigate('result'))
    assert.strictEqual(storeUi.searched, true)
  })
})
