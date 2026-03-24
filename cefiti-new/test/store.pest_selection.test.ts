import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { Store } from '../src/store.ts'

describe('Store: species selection logic', () => {
  const store = new Store()

  it('should match specific species AND genus when specific species is selected', () => {
    // Malus pumila is ID 144
    // Neonectria ditissima (Neonectria galligena) has host [148] (Malus sp.)
    // species(['Malus sp.'], 'Malus pumila') should be true
    assert.strictEqual(store.species([148], 'Malus pumila'), true, 'Malus pumila should match its genus pest (Malus sp.)')
    
    // Testing specific match
    // If a pest had host [144], it should match Malus pumila
    assert.strictEqual(store.species([144], 'Malus pumila'), true, 'Malus pumila should match itself')
  })

  it('should match all species under genus when genus is selected', () => {
    // Musa spp. is ID 41
    // Ralstonia solanacearum raça 2 has host [41]
    // species([41], 'Musa spp.') should be true
    assert.strictEqual(store.species([41], 'Musa spp.'), true, 'Musa spp. should match its own host ID')

    // If a pest has a specific Musa species (if any existed in DB with ID e.g. 999)
    // it should match Musa spp.
    // Let's find a specific Malus in DB. Malus communis is 142.
    // species([142], 'Malus sp.') should be true
    assert.strictEqual(store.species([142], 'Malus sp.'), true, 'Malus sp. should match specific Malus species like Malus communis')
  })

  it('should return pest names via pragasByHospId getter', () => {
    // Malus pumila (144)
    store.dados.hospSci = 'Malus pumila'
    const names = store.pragasByHospId
    // Neonectria ditissima has host [148] (Malus sp.), so it should be included for Malus pumila
    assert(names.includes('Neonectria ditissima (Neonectria galligena)'), 'Should include Neonectria ditissima for Malus pumila')

    // Musa spp. (41)
    store.dados.hospSci = 'Musa spp.'
    const musaNames = store.pragasByHospId
    // BSV e CMV has host [41] (Musa spp.)
    assert(musaNames.includes('BSV e CMV'), 'Should include BSV e CMV for Musa spp.')
    // Pseudocercospora fijiensis (Mycosphaerella fijiensis) has host [41]
    assert(musaNames.includes('Pseudocercospora fijiensis (Mycosphaerella fijiensis)'), 'Should include Sigatoka Negra for Musa spp.')
  })
})
