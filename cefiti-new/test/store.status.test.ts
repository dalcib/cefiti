import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { Store } from '../src/store.ts'

describe('Store: phytosanitary status logic', () => {
  const store = new Store()

  it('should return "Área Com Ocorrência" for Rio de Janeiro (330455) for Sternochetus mangiferae', () => {
    // 33 is RJ, 0455 is Rio de Janeiro
    const status = (store as any).resolveStatus(
      'Sternochetus mangiferae',
      '330455',
    )
    assert.deepEqual(status, ['Área Com Ocorrência'])
  })

  it('should return "Área Com Ocorrência" for any municipality in AP (169999) for Sternochetus mangiferae', () => {
    // 16 is AP, 9999 is "Todos" (but any 4 digit should work if 9999 is set)
    const status = (store as any).resolveStatus(
      'Sternochetus mangiferae',
      '160010',
    )
    assert.deepEqual(status, ['Área Com Ocorrência'])
  })

  it('should return "Área Sem Registro" for a municipality not listed', () => {
    // 31 is MG, 0010 is Abadia dos Dourados
    // Sternochetus mangiferae is not in MG
    const status = (store as any).resolveStatus(
      'Sternochetus mangiferae',
      '310010',
    )
    assert.deepEqual(status, ['Área Sem Registro'])
  })

  it('should return "Área Sem Registro" for a pest not in status_municipio', () => {
    const status = (store as any).resolveStatus('Non Existent Pest', '330455')
    assert.deepEqual(status, ['Área Sem Registro'])
  })

  it('should handle multiple statuses if they exist (hypothetically)', () => {
    // In db-next.js, some pests might have multiple entries in status array.
    // Let's check Bactrocera carambolae
    // It has "Área Com Ocorrência" for AP, RR, and some in AM, PA.
    // It has "Zona Tampão" for others in PA, AM.
    // It has "UF Sem Registro" for almost all other states.

    // Test for PA (15) municipality Belém (0140) -> should be "Zona Tampão"
    const statusBelem = (store as any).resolveStatus(
      'Bactrocera carambolae',
      '150140',
    )
    assert.deepEqual(statusBelem, ['Zona Tampão'])

    // Test for PA (15) municipality Almeirim (0050) -> should be "Área Com Ocorrência"
    const statusAlmeirim = (store as any).resolveStatus(
      'Bactrocera carambolae',
      '150050',
    )
    assert.deepEqual(statusAlmeirim, ['Área Com Ocorrência'])

    // Test for MG (31) -> should be "UF Sem Registro" (since 9999: Todos is set for MG in the 3rd status object)
    const statusMG = (store as any).resolveStatus(
      'Bactrocera carambolae',
      '310010',
    )
    assert.deepEqual(statusMG, ['UF Sem Registro'])
  })

  it('should resolve ID from name and UF', async () => {
    await store.loadMunicipios()
    const id = (store as any).getMunicipioId('Rio de Janeiro', 'RJ')
    assert.equal(id, '330455')
  })

  it('should work with the getters using names', async () => {
    await store.loadMunicipios()
    // Setup store state
    store.dados.hospSci = 'Mangifera indica' // Mango
    // Sternochetus mangiferae is a pest for Mango
    store.dados.orig = 'RJ'
    store.dados.municipioOrigem = 'Rio de Janeiro'
    store.dados.dest = 'MG'
    store.dados.municipioDestino = 'Abadia dos Dourados'

    const statusOrigem = store.statusOrigemByPraga
    const statusDestino = store.statusDestinoByPraga

    assert.deepEqual(statusOrigem['Sternochetus mangiferae'], [
      'Área Com Ocorrência',
    ])
    assert.deepEqual(statusDestino['Sternochetus mangiferae'], [
      'Área Sem Registro',
    ])
  })
})
