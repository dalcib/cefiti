import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { StoreDb } from '../src/store-db.ts'

describe('Store: species selection logic', () => {
  const store = new StoreDb()

  it('should match specific species AND genus when specific species is selected', () => {
    // Citrus sinensis is ID 138
    // Xanthomonas citri subsp. citri has host [103] (Citrus spp.)
    // species([103], 'Citrus sinensis') should be true
    assert.strictEqual(
      store.species([103], 'Citrus sinensis'),
      true,
      'Citrus sinensis should match its genus pest (Citrus spp.)',
    )

    // Testing specific match
    // If a pest had host [138], it should match Citrus sinensis
    assert.strictEqual(
      store.species([138], 'Citrus sinensis'),
      true,
      'Citrus sinensis should match itself',
    )
  })

  it('should match all species under genus when genus is selected', () => {
    // Musa spp. is ID 41
    // Ralstonia solanacearum raça 2 has host [41]
    // species([41], 'Musa spp.') should be true
    assert.strictEqual(
      store.species([41], 'Musa spp.'),
      true,
      'Musa spp. should match its own host ID',
    )

    // If a pest has a specific Citrus species (e.g. 138)
    // it should match Citrus spp.
    // species([138], 'Citrus spp.') should be true
    assert.strictEqual(
      store.species([138], 'Citrus spp.'),
      true,
      'Citrus spp. should match specific Citrus species like Citrus sinensis',
    )
  })

  it('should return pest names via pragasByHospId getter', () => {
    // Citrus sinensis (138)
    store.dados.hospSci = 'Citrus sinensis'
    const names = store.pragasByHospId
    // Xanthomonas citri subsp. citri has host [103] (Citrus spp.), so it should be included for Citrus sinensis
    assert(
      names.includes('Xanthomonas citri subsp. citri'),
      'Should include Xanthomonas citri for Citrus sinensis',
    )

    // Musa spp. (41)
    store.dados.hospSci = 'Musa spp.'
    const musaNames = store.pragasByHospId
    // BSV e CMV has host [41] (Musa spp.)
    assert(
      musaNames.includes('BSV e CMV'),
      'Should include BSV e CMV for Musa spp.',
    )
    // Pseudocercospora fijiensis (Mycosphaerella fijiensis) has host [41]
    assert(
      musaNames.includes(
        'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      ),
      'Should include Sigatoka Negra for Musa spp.',
    )
  })
})
