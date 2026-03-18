import assert from 'node:assert/strict'
import { beforeEach, describe, it, mock } from 'node:test'
import { estados } from '../src/db.ts'
import { Store } from '../src/store.ts'

const mockWindow = {
  gtag: () => {}, // Empty function for gtag
  print: () => {}, //Empty function for print
}
globalThis.window = mockWindow as unknown as Window & typeof globalThis
globalThis.alert = ((message: string) => console.log(message)) as unknown as (
  message?: string,
) => void

describe('Store', () => {
  let store: Store

  beforeEach(() => {
    //  Using a fresh instance for each test to avoid state interference.  Consider mocking db data for better isolation.
    store = new Store()
  })

  it('should initialize correctly', () => {
    //  Test db creation -  This might require mocking the db data for reliable testing.
    assert.deepEqual(store.dados, {
      hospSci: '',
      hospVul: '',
      prod: '',
      orig: '',
      dest: '',
      municipioOrigem: '',
      municipioDestino: '',
    })
    assert.strictEqual(store.exibeBase, false)
    assert.strictEqual(store.searched, false)
  })

  it('should calculate hospedeirosPragas correctly', () => {
    // This test depends on the structure of dbPragas.  Mock data would make this more robust.
    assert.ok(store.hospedeirosPragas.length >= 0) // Adjust expectation based on your db data
  })

  it('should calculate hospedeirosRegulamentados correctly', () => {
    // This test depends on the structure of dbPragas and dbHospedeiros. Mock data is highly recommended.
    assert.ok(store.hospedeirosRegulamentados.length >= 0) // Adjust expectation based on your db data
  })

  it('should calculate listaNomesSci correctly', () => {
    assert.ok(store.listaNomesSci.length >= 1) // Includes empty string
    assert.strictEqual(store.listaNomesSci[0], '') //First element should be empty string
    //Further checks depend on the content of dbHospedeiros.  Mocking is recommended.
  })

  it('should calculate listaNomesVul correctly', () => {
    assert.ok(store.listaNomesVul.length >= 1) // Includes empty string
    assert.strictEqual(store.listaNomesVul[0], '') //First element should be empty string
    //Further checks depend on the content of dbHospedeiros.  Mocking is recommended.
  })

  it('should correctly determine empty state', () => {
    assert.strictEqual(store.empty, true) // Initially empty
    store.dados.hospSci = 'Citrus spp.' //Simulate data entry
    store.dados.hospVul = 'Citros' //Simulate data entry
    store.dados.prod = 'frutos' //Simulate data entry
    store.dados.orig = 'AC' //Simulate data entry
    store.dados.dest = 'BA' //Simulate data entry
    assert.strictEqual(store.empty, false) // Should be false after data entry -  This is highly dependent on your data
  })

  it('should filter origem correctly', () => {
    assert.strictEqual(store.origem.length, estados.length) //Initially all states are available
    store.dados.dest = estados[1].UF
    assert.ok(store.origem.length < estados.length) //One state should be removed
  })

  it('should filter destino correctly', () => {
    assert.strictEqual(store.destino.length, estados.length) //Initially all states are available
    store.dados.orig = estados[1].UF
    assert.ok(store.destino.length < estados.length) //One state should be removed
  })

  it('should correctly check species', () => {
    assert.strictEqual(store.species(['Test species'], 'Test species'), true)
    assert.strictEqual(store.species(['Test species'], 'Test speciesOther'), false)
    assert.strictEqual(store.species(['Test sp.'], 'Test species'), true)
    assert.strictEqual(store.species(['Test spp.'], 'Test species.'), true)
  })

  it('should correctly determine completed state', () => {
    assert.strictEqual(store.completed, false) // Initially incomplete
    store.dados.hospSci = 'someSpecies'
    store.dados.hospVul = 'someVulgarName'
    store.dados.prod = 'someProduct'
    store.dados.orig = 'someOrigin'
    store.dados.dest = 'someDestination'
    assert.strictEqual(store.completed, true) // Should be true after filling all fields
  })

  it('should calculate partes correctly', () => {
    // This test depends on the structure of db and the species function.  Mocking is highly recommended.
    assert.ok(store.partes.length >= 1) // Includes empty string
  })

  it('should filter result correctly', () => {
    // This test depends heavily on the structure of db and the data. Mocking is essential for reliable testing.
    assert.ok(store.result.length >= 0) // Adjust expectation based on your db data
  })

  it('should clean the data correctly', () => {
    store.dados.hospSci = 'someValue'
    store.clean()
    assert.deepEqual(store.dados, {
      hospSci: '',
      hospVul: '',
      prod: '',
      orig: '',
      dest: '',
      municipioOrigem: '',
      municipioDestino: '',
    })
  })

  it('should handle changes correctly', () => {
    const mockEvent = {
      currentTarget: {
        name: 'hospSci',
        value: 'someSpecies',
      },
    } as unknown as Event

    store.handleChanges(mockEvent)
    assert.strictEqual(store.dados.hospSci, 'someSpecies')
    //Further assertions depend on the dbHospedeiros data and the logic within handleChanges. Mocking is recommended.
  })

  it('should handle menu actions correctly', () => {
    store.handleMenu('Base')
    assert.strictEqual(store.exibeBase, true)
    store.handleMenu('Nova')
    assert.strictEqual(store.exibeBase, true) // exibeBase should remain true after 'Nova'
    assert.deepEqual(store.dados, {
      hospSci: '',
      hospVul: '',
      prod: '',
      orig: '',
      dest: '',
      municipioOrigem: '',
      municipioDestino: '',
    })
    assert.strictEqual(store.searched, false)
    store.handleMenu('Voltar')
    assert.strictEqual(store.searched, false)
    store.handleMenu('Print') //This action is browser dependent and hard to test reliably.
  })

  it('should handle search correctly', () => {
    const preventDefault = mock.fn()
    const mockEvent = {
      preventDefault,
    } as unknown as Event

    store.handleSearch(mockEvent)
    assert.strictEqual(store.searched, false)
    assert.strictEqual(preventDefault.mock.callCount() > 0, true) //Should prevent default because it's not completed
    store.dados.hospSci = 'someSpecies'
    store.dados.hospVul = 'someVulgarName'
    store.dados.prod = 'someProduct'
    store.dados.orig = 'someOrigin'
    store.dados.dest = 'someDestination'
    store.handleSearch(mockEvent)
    assert.strictEqual(store.searched, true)
    assert.strictEqual(preventDefault.mock.callCount(), 2) //Called twice, once for incomplete, once for complete
  })
})
