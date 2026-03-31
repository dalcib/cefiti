import assert from 'node:assert/strict'
import { before, describe, it } from 'node:test'
// @ts-expect-error
import { hospedeiros } from '../../firebase/public/db-next.js'
import { store } from '../src/store.ts'

describe('Store', () => {
  it('should be initialized', () => {
    assert.strictEqual(typeof store, 'object')
  })
})

describe('Store hospedeiros', () => {
  it('listaNomesSci matches count of all hosts', () => {
    // Current database has 56 hosts
    assert.strictEqual(store.listaNomesSci.length, 56)
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
    assert.deepEqual(store.partes, ['frutos'])
  })

  it('de Banana', () => {
    store.dados.hospSci = 'Musa spp.'
    assert.deepEqual(store.partes, [
      'frutos',
      'inflorescências',
      'mudas',
      'rizomas',
    ])
  })

  it('de Citrus', () => {
    store.dados.hospSci = 'Citrus spp.'
    assert.deepEqual(store.partes, [
      'caules',
      'flores',
      'folhas',
      'frutos',
      'material de propagação vegetativa',
      'mudas',
      'plantas',
      'raízes',
      'ramos',
      'sementes',
    ])
  })
})

describe('Store filtro geral', () => {
  before(async () => {
    await store.loadMunicipios()
    store.dados.hospSci = 'Musa spp.'
    store.dados.hospId = 41
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.municipioOrigem = 'Campina Verde'
    store.dados.municipioOrigemId = '311110'
    store.dados.dest = 'MT'
    store.dados.municipioDestino = 'Cuiabá'
    store.dados.municipioDestinoId = '510340'
  })

  it('Musa spp. count (MG ALP -> MT SMR)', () => {
    // With 311110 (ALP) and 519999 (SMR), zero rules match for fruits in Musa
    assert.strictEqual(store.result.length, 0)
  })

  it('Musa spp. with ACO origin (AM ACO -> MG ALP)', async () => {
    // Manaus (130260) is ACO for Sigatoka Negra and Moko
    store.dados.orig = 'AM'
    store.dados.municipioOrigem = 'Manaus'
    store.dados.municipioOrigemId = '130260'
    store.dados.dest = 'MG'
    store.dados.municipioDestino = 'Campina Verde'
    store.dados.municipioDestinoId = '311110'

    assert(store.result.length > 0)
  })

  it('Citrus spp. results', async () => {
    store.dados.hospSci = 'Citrus spp.'
    store.dados.hospId = 103
    store.dados.prod = 'frutos'
    store.dados.orig = 'SP'
    store.dados.municipioOrigem = 'São Paulo'
    store.dados.municipioOrigemId = '355030'
    store.dados.dest = 'MG'
    store.dados.municipioDestino = 'Belo Horizonte'
    store.dados.municipioDestinoId = '310620'
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
    store.updateHospedeiro('Citrus sinensis', 'hospSci')
    assert.strictEqual(store.dados.hospVul, 'Laranja')
    assert.strictEqual(store.dados.hospId, 138)
  })
})

describe('Database Integrity', () => {
  it('no duplicate common names in same species record', () => {
    ;(hospedeiros as any[]).forEach((h: any) => {
      const set = new Set(h.nomeVul)
      assert.strictEqual(
        set.size,
        h.nomeVul.length,
        `Duplicate common name in ${h.nomeSci}`,
      )
    })
  })
})

it('should be reactive when updating dados fields', () => {
  store.dados.prod = 'mudas'
  assert.strictEqual(store.dados.prod, 'mudas')
})
