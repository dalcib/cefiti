import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { StoreDb } from '../src/store-db.ts'

describe('Store: phytosanitary status logic', () => {
  const store = new StoreDb()

  it('should return "Área Com Ocorrência" for Rio de Janeiro (330455) for Sternochetus mangiferae', () => {
    // 33 is RJ, 0455 is Rio de Janeiro
    // biome-ignore lint/suspicious/noExplicitAny: Internal method testing
    const status = (store as any).resolveStatus(
      'Sternochetus mangiferae',
      '330455',
    )
    assert.deepEqual(status, ['Área Com Ocorrência'])
  })

  it('should return "Área Com Ocorrência" for any municipality in AP (169999) for Bactrocera carambolae', () => {
    // 16 is AP, 9999 is "Todos" (but any 4 digit should work if 9999 is set)
    // biome-ignore lint/suspicious/noExplicitAny: Internal method testing
    const status = (store as any).resolveStatus(
      'Bactrocera carambolae',
      '160010',
    )
    assert.deepEqual(status, ['Área Com Ocorrência'])
  })

  it('should return "Área Sem Registro" for a municipality not listed', () => {
    // 31 is MG, 0010 is Abadia dos Dourados
    // Sternochetus mangiferae is not in MG
    // biome-ignore lint/suspicious/noExplicitAny: Internal method testing
    const status = (store as any).resolveStatus(
      'Sternochetus mangiferae',
      '310010',
    )
    assert.deepEqual(status, ['Área Sem Registro'])
  })

  it('should return "Área Sem Registro" for a pest not in status_municipio', () => {
    // biome-ignore lint/suspicious/noExplicitAny: Internal method testing
    const status = (store as any).resolveStatus('Non Existent Pest', '330455')
    assert.deepEqual(status, ['Área Sem Registro'])
  })

  it('should handle multiple statuses if they exist (hypothetically)', () => {
    // Test for PA (15) municipality Belém (0140) -> should be "Zona Tampão"
    // biome-ignore lint/suspicious/noExplicitAny: Internal method testing
    const statusBelem = (store as any).resolveStatus(
      'Bactrocera carambolae',
      '150140',
    )
    assert.deepEqual(statusBelem, ['Zona Tampão'])

    // Test for PA (15) municipality Almeirim (0050) -> should be "Área Com Ocorrência"
    // biome-ignore lint/suspicious/noExplicitAny: Internal method testing
    const statusAlmeirim = (store as any).resolveStatus(
      'Bactrocera carambolae',
      '150050',
    )
    assert.deepEqual(statusAlmeirim, ['Área Com Ocorrência'])

    // Test for MG (31) -> should be "UF Sem Registro"
    // biome-ignore lint/suspicious/noExplicitAny: Internal method testing
    const statusMG = (store as any).resolveStatus(
      'Bactrocera carambolae',
      '310010',
    )
    assert.deepEqual(statusMG, ['UF Sem Registro'])
  })

  it('should work with the getters using ID fields', async () => {
    await store.loadMunicipios()
    // In actual app, these would be set via the Form's handleInput
    store.dados.hospSci = 'Mangifera indica'
    store.dados.orig = 'RJ'
    store.dados.municipioOrigem = 'Rio de Janeiro'
    store.dados.municipioOrigemId = '330455'

    store.dados.dest = 'MG'
    store.dados.municipioDestino = 'Abadia dos Dourados'
    store.dados.municipioDestinoId = '310010'

    const statusOrigem = store.statusOrigemByPraga
    const statusDestino = store.statusDestinoByPraga

    assert.deepEqual(statusOrigem['Sternochetus mangiferae'], [
      'Área Com Ocorrência',
    ])
    assert.deepEqual(statusDestino['Sternochetus mangiferae'], [
      'Área Sem Registro',
    ])
  })

  it('should resolve ID correctly through updateMunicipioSelection', async () => {
    await store.loadMunicipios()
    // Simulate user choosing "Alto Alegre" in RR
    store.updateMunicipioSelection('municipioOrigem', 'Alto Alegre', '140005')
    assert.equal(store.dados.municipioOrigem, 'Alto Alegre')
    assert.equal(store.dados.municipioOrigemId, '140005')
  })
})
