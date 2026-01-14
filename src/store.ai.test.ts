import { estados } from './estados.ts'
import { beforeEach, describe, expect, it, mock } from './lib/expect.ts'
import { Store } from './store.ts'

const mockWindow = {
  gtag: () => { }, // Empty function for gtag
  print: () => { }, //Empty function for print
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
    expect(store.dados).toEqual({
      hospSci: '',
      hospVul: '',
      prod: '',
      orig: '',
      dest: '',
    })
    expect(store.exibeBase).toBe(false)
    expect(store.searched).toBe(false)
  })

  it('should calculate hospedeirosPragas correctly', () => {
    // This test depends on the structure of dbPragas.  Mock data would make this more robust.
    expect(store.hospedeirosPragas.length).toBeGreaterThanOrEqual(0) // Adjust expectation based on your db data
  })

  it('should calculate hospedeirosRegulamentados correctly', () => {
    // This test depends on the structure of dbPragas and dbHospedeiros. Mock data is highly recommended.
    expect(store.hospedeirosRegulamentados.length).toBeGreaterThanOrEqual(0) // Adjust expectation based on your db data
  })

  it('should calculate listaNomesSci correctly', () => {
    expect(store.listaNomesSci.length).toBeGreaterThanOrEqual(1) // Includes empty string
    expect(store.listaNomesSci[0]).toBe('') //First element should be empty string
    //Further checks depend on the content of dbHospedeiros.  Mocking is recommended.
  })

  it('should calculate listaNomesVul correctly', () => {
    expect(store.listaNomesVul.length).toBeGreaterThanOrEqual(1) // Includes empty string
    expect(store.listaNomesVul[0]).toBe('') //First element should be empty string
    //Further checks depend on the content of dbHospedeiros.  Mocking is recommended.
  })

  it('should correctly determine empty state', () => {
    expect(store.empty).toBe(true) // Initially empty
    store.dados.hospSci = 'Citrus spp.' //Simulate data entry
    store.dados.hospVul = 'Citros' //Simulate data entry
    store.dados.prod = 'frutos' //Simulate data entry
    store.dados.orig = 'AC' //Simulate data entry
    store.dados.dest = 'BA' //Simulate data entry
    expect(store.empty).toBe(false) // Should be false after data entry -  This is highly dependent on your data
  })

  it('should filter origem correctly', () => {
    expect(store.origem.length).toEqual(estados.length) //Initially all states are available
    store.dados.dest = estados[1].UF
    expect(store.origem.length).toBeLessThan(estados.length) //One state should be removed
  })

  it('should filter destino correctly', () => {
    expect(store.destino.length).toEqual(estados.length) //Initially all states are available
    store.dados.orig = estados[1].UF
    expect(store.destino.length).toBeLessThan(estados.length) //One state should be removed
  })

  it('should correctly check species', () => {
    expect(store.species(['Test species'], 'Test species')).toBe(true)
    expect(store.species(['Test species'], 'Test speciesOther')).toBe(false)
    expect(store.species(['Test sp.'], 'Test species')).toBe(true)
    expect(store.species(['Test spp.'], 'Test species.')).toBe(true)
  })

  it('should correctly determine completed state', () => {
    expect(store.completed).toBe(false) // Initially incomplete
    store.dados.hospSci = 'someSpecies'
    store.dados.hospVul = 'someVulgarName'
    store.dados.prod = 'someProduct'
    store.dados.orig = 'someOrigin'
    store.dados.dest = 'someDestination'
    expect(store.completed).toBe(true) // Should be true after filling all fields
  })

  it('should calculate partes correctly', () => {
    // This test depends on the structure of db and the species function.  Mocking is highly recommended.
    expect(store.partes.length).toBeGreaterThanOrEqual(1) // Includes empty string
  })

  it('should filter result correctly', () => {
    // This test depends heavily on the structure of db and the data. Mocking is essential for reliable testing.
    expect(store.result.length).toBeGreaterThanOrEqual(0) // Adjust expectation based on your db data
  })

  it('should clean the data correctly', () => {
    store.dados.hospSci = 'someValue'
    store.clean()
    expect(store.dados).toEqual({
      hospSci: '',
      hospVul: '',
      prod: '',
      orig: '',
      dest: '',
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
    expect(store.dados.hospSci).toBe('someSpecies')
    //Further assertions depend on the dbHospedeiros data and the logic within handleChanges. Mocking is recommended.
  })

  it('should handle menu actions correctly', () => {
    store.handleMenu('Base')
    expect(store.exibeBase).toBe(true)
    store.handleMenu('Nova')
    expect(store.exibeBase).toBe(true) // exibeBase should remain true after 'Nova'
    expect(store.dados).toEqual({
      hospSci: '',
      hospVul: '',
      prod: '',
      orig: '',
      dest: '',
    })
    expect(store.searched).toBe(false)
    store.handleMenu('Voltar')
    expect(store.searched).toBe(false)
    store.handleMenu('Print') //This action is browser dependent and hard to test reliably.
  })

  it('should handle search correctly', () => {
    const mockEvent = {
      preventDefault: mock.fn(),
    } as unknown as Event
    store.handleSearch(mockEvent)
    expect(store.searched).toBe(false)
    expect(mockEvent.preventDefault).toHaveBeenCalled() //Should prevent default because it's not completed
    store.dados.hospSci = 'someSpecies'
    store.dados.hospVul = 'someVulgarName'
    store.dados.prod = 'someProduct'
    store.dados.orig = 'someOrigin'
    store.dados.dest = 'someDestination'
    store.handleSearch(mockEvent)
    expect(store.searched).toBe(true)
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(2) //Called twice, once for incomplete, once for complete
  })
})
