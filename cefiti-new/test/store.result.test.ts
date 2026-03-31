import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { Store } from '../src/store.ts'

describe('Store: rule filtering by status', () => {
  const store = new Store()

  it('should filter rules correctly for Bactrocera carambolae (Zona Tampão -> UF Sem Registro)', async () => {
    await store.loadMunicipios()
    // Setup state
    store.dados.hospSci = 'Mangifera indica'
    store.dados.hospId = 152
    store.dados.prod = 'frutos'
    store.dados.municipioOrigem = 'Belém'
    store.dados.municipioOrigemId = '150140'
    store.dados.municipioDestino = 'Adolfo'
    store.dados.municipioDestinoId = '350010'
    store.searched = true

    const results = store.result

    // Check if we found rules for Bactrocera carambolae
    const carambolaeRules = results.filter(
      (r) => r.prag === 'Bactrocera carambolae',
    )

    // Based on db-next.js:
    // Rule 1448 should match.
    assert.ok(
      carambolaeRules.length > 0,
      'Should find at least one rule for B. carambolae',
    )

    const ruleZonaTampao = carambolaeRules.find(
      (r) => r.desc === 'De Zona Tampão para qualquer destino',
    )
    assert.ok(
      ruleZonaTampao,
      'Should find the specific rule for Zona Tampão origin',
    )
  })

  it('should return empty result if no product is selected', () => {
    store.clean()
    store.dados.hospSci = 'Mangifera indica'
    store.dados.prod = ''

    assert.equal(store.result.length, 0)
  })

  it('should filter by product type', async () => {
    await store.loadMunicipios()
    // Setup state
    store.dados.hospSci = 'Mangifera indica'
    store.dados.hospId = 152
    store.dados.prod = 'material de propagação vegetativo'
    store.dados.municipioOrigem = 'Almeirim'
    store.dados.municipioOrigemId = '150050'
    store.dados.municipioDestino = 'Adolfo'
    store.dados.municipioDestinoId = '350010'

    const results = store.result

    // For Bactrocera carambolae, rules are only for "frutos" (not mudas/material de propagação)
    const carambolaeRules = results.filter(
      (r) => r.prag === 'Bactrocera carambolae',
    )
    assert.equal(
      carambolaeRules.length,
      0,
      'Should not find carambolae rules for mudas',
    )
  })
})
