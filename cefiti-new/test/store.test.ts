import assert from 'node:assert/strict'
import { before, describe, it, test } from 'node:test'
import { estados, hospedeiros } from '../../firebase/public/db-next.js'
import { store } from '../src/store.ts'

describe('Store', () => {
  it('should be initialized', () => {
    assert.strictEqual(typeof store, 'object')
  })
})

describe('Store hospedeiros', () => {
  it('listaNomesSci matches count of all hosts', () => {
    // Current database has 206 hosts + 1 empty string = 207
    assert.strictEqual(store.listaNomesSci.length, 207)
  })

  it('listaNomesVul contains names', () => {
    assert(store.listaNomesVul.length > 50)
  })

/* it('hospedeirosRegulamentados logic', () => {
    const regulated = store.hospedeirosRegulamentados
    assert(regulated.length > 0)
    assert(regulated.length <= hospedeiros.length)
  }) */
})

describe('Store pragas', () => {
  it('pragasByHospId for Musa spp.', () => {
    store.dados.hospSci = 'Musa spp.'
    const p = store.pragasByHospId
    assert(p.includes('Ralstonia solanacearum raça 2'))
    assert(p.includes('Pseudocercospora fijiensis (Mycosphaerella fijiensis)'))
  })

  it('pragasByHospId for Citrus spp.', () => {
    store.dados.hospSci = 'Citrus spp.'
    const p = store.pragasByHospId
    assert(p.includes('Xanthomonas citri subsp. citri'))
  })
})

describe('Store partes', () => {
  it('de Acerola', () => {
    store.dados.hospSci = 'Malpighia spp.'
    assert.deepEqual(store.partes, ['', 'frutos'])
  })

  it('de Banana', () => {
    store.dados.hospSci = 'Musa spp.'
    assert.deepEqual(store.partes, [
      '',
      'frutos',
      'inflorescências',
      'mudas',
      'mudas de bananeira',
      'mudas e rizomas',
    ])
  })

  it('de Citrus', () => {
    store.dados.hospSci = 'Citrus spp.'
    assert.deepEqual(store.partes, [
      '',
      'frutos',
      'frutos de Citrus spp.',
      'frutos secos e descascados de Cocos nucifera',
      'madeira serrada',
      'material de propagação vegetativo',
      'material in vitro',
      'plantas e partes de Citrus spp. (exceto frutos), Cocos nucifera (exceto frutos secos/descascados), Acacia sp., Azadirachta indica, Melia azedarach e Sorghum bicolor',
      'sementes',
    ])
  })
})

describe('Store filtro geral', () => {
  before(async () => {
    await store.loadMunicipios()
    store.dados.hospSci = 'Musa spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.dest = 'MT'
    // name for Campina Verde (311110)
    store.dados.municipioOrigem = 'Campina Verde'
    // For MT (51), just use 'Cuiabá' (510340) or similar
    store.dados.municipioDestino = 'Cuiabá'
  })

  it('Musa spp. count (MG ALP -> MT SMR)', () => {
    // With 311110 (ALP) and 519999 (SMR), zero rules match for fruits in Musa
    assert.strictEqual(store.result.length, 0)
  })

  it('Musa spp. with ACO origin (AM ACO -> MG ALP)', async () => {
    // Manaus (130260) is ACO for Sigatoka Negra and Moko
    store.dados.orig = 'AM'
    store.dados.municipioOrigem = 'Manaus'
    store.dados.dest = 'MG'
    store.dados.municipioDestino = 'Campina Verde' // MG Campina Verde (ALP for Sigatoka)
    
    assert(store.result.length > 0)
  })

  it('Citrus spp. results', async () => {
    store.dados.hospSci = 'Citrus spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'SP'
    store.dados.dest = 'MG'
    store.dados.municipioOrigem = 'São Paulo' // 355030
    store.dados.municipioDestino = 'Belo Horizonte' // 310620
    assert(store.result.length > 0)
  })
})

describe('Sync between NomeVulg and NomeSci', () => {
  it('updates NomeSci when NomeVul changes', () => {
    store.updateHospedeiro('Banana', 'hospVul')
    assert.strictEqual(store.dados.hospSci, 'Musa spp.')
    assert.strictEqual(store.dados.hospId, 41)
  })

  it('updates NomeVul when NomeSci changes', () => {
    store.updateHospedeiro('Malpighia spp.', 'hospSci')
    assert.strictEqual(store.dados.hospVul, 'Acerola(qualquer espécie)')
    assert.strictEqual(store.dados.hospId, 6)
  })
})

describe('Database Integrity', () => {
  test('no duplicate common names in same species record', () => {
    hospedeiros.forEach((h) => {
      const set = new Set(h.nomeVul)
      assert.strictEqual(set.size, h.nomeVul.length, `Duplicate common name in ${h.nomeSci}`)
    })
  })
})

it('should be reactive when updating dados fields', () => {
  store.dados.prod = 'mudas'
  assert.strictEqual(store.dados.prod, 'mudas')
})
