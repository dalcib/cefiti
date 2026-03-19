import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { Store } from './store.ts'

describe('Store: rule filtering by status', () => {
  const store = new Store()

  it('should filter rules correctly for Bactrocera carambolae (Zona Tampão -> UF Sem Registro)', () => {
    // Setup state
    store.dados.hospSci = 'Mangifera indica'
    store.dados.hospId = 152
    store.dados.prod = 'frutos'
    store.dados.orig = 'PA'
    store.dados.dest = 'SP'
    store.dados.municipioOrigem = '150140' // Belém, PA (Zona Tampão)
    store.dados.municipioDestino = '350010' // Adolfo, SP (UF Sem Registro)
    store.searched = true

    const results = store.result
    
    // Check if we found rules for Bactrocera carambolae
    const carambolaeRules = results.filter(r => r.prag === 'Bactrocera carambolae')
    
    // Based on db-next.js:
    // Rule 2008: orig=["Zona Tampão"], dest=["Todas as Áreas"] should match.
    assert.ok(carambolaeRules.length > 0, 'Should find at least one rule for B. carambolae')
    
    const rule2008 = carambolaeRules.find(r => r.desc === 'De Zona Tampão para qualquer destino')
    assert.ok(rule2008, 'Should find the specific rule for Zona Tampão origin')
  })

  it('should return empty result if no product is selected', () => {
    store.clean()
    store.dados.hospSci = 'Mangifera indica'
    store.dados.prod = ''
    
    assert.equal(store.result.length, 0)
  })

  it('should filter by product type', () => {
    // Setup state
    store.dados.hospSci = 'Mangifera indica'
    store.dados.hospId = 152
    store.dados.prod = 'material de propagação vegetativo'
    store.dados.orig = 'PA'
    store.dados.dest = 'SP'
    store.dados.municipioOrigem = '150050' // Almeirim, PA (Área Com Ocorrência)
    store.dados.municipioDestino = '350010' // SP (UF Sem Registro)

    const results = store.result
    
    // For Bactrocera carambolae, rules are only for "frutos" (not mudas/material de propagação)
    const carambolaeRules = results.filter(r => r.prag === 'Bactrocera carambolae')
    assert.equal(carambolaeRules.length, 0, 'Should not find carambolae rules for mudas')
  })
})
