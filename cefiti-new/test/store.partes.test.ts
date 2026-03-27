import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { Store } from '../src/store.ts'

describe('Store: partes getter', () => {
  const store = new Store()

  it('should return parts for Mangifera indica', () => {
    store.dados.hospSci = 'Mangifera indica'
    const parts = store.partes

    // Mangifera indica is host for many pests (Bactrocera carambolae, etc.)
    // We expect some parts like "frutos"
    assert.ok(parts.includes('frutos'), 'Should include frutos')
  })

  it('should return unique parts', () => {
    store.dados.hospSci = 'Mangifera indica'
    const parts = store.partes
    const uniqueParts = [...new Set(parts)]
    assert.equal(parts.length, uniqueParts.length, 'Parts should be unique')
  })

  it('should return empty list for unknown host', () => {
    store.clean()
    store.dados.hospSci = 'Unknown species'
    const parts = store.partes
    assert.deepEqual(parts, [])
  })
})
