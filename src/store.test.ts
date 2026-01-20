import assert from 'node:assert'
import { before, describe, it, test } from 'node:test'
import { hospedeiros, pragas, regras } from './db.ts'
import { store } from './store.ts'

type EventChange = {
  currentTarget: { name: string; value: string }
}

const estadosSemAC = [
  { estado: '', UF: '' },
  //{estado: 'Acre', UF: 'AC'},
  { estado: 'Alagoas', UF: 'AL', ibge: 27 },
  { estado: 'Amazonas', UF: 'AM', ibge: 13 },
  { estado: 'Amapá', UF: 'AP', ibge: 16 },
  { estado: 'Bahia', UF: 'BA', ibge: 29 },
  { estado: 'Ceará', UF: 'CE', ibge: 23 },
  { estado: 'Distrito Federal', UF: 'DF', ibge: 53 },
  { estado: 'Espirito Santo', UF: 'ES', ibge: 32 },
  { estado: 'Goiás', UF: 'GO', ibge: 52 },
  { estado: 'Maranhão', UF: 'MA', ibge: 21 },
  { estado: 'Minas Gerais', UF: 'MG', ibge: 31 },
  { estado: 'Mato Grosso do Sul', UF: 'MS', ibge: 50 },
  { estado: 'Mato Grosso', UF: 'MT', ibge: 51 },
  { estado: 'Pará', UF: 'PA', ibge: 15 },
  { estado: 'Paraíba', UF: 'PB', ibge: 25 },
  { estado: 'Pernambuco', UF: 'PE', ibge: 26 },
  { estado: 'Piauí', UF: 'PI', ibge: 22 },
  { estado: 'Paraná', UF: 'PR', ibge: 41 },
  { estado: 'Rio de janeiro', UF: 'RJ', ibge: 33 },
  { estado: 'Rio Grande do Norte', UF: 'RN', ibge: 24 },
  { estado: 'Rondônia', UF: 'RO', ibge: 11 },
  { estado: 'Roraima', UF: 'RR', ibge: 14 },
  { estado: 'Rio Grande do Sul', UF: 'RS', ibge: 43 },
  { estado: 'Santa Catarina', UF: 'SC', ibge: 42 },
  { estado: 'Sergipe', UF: 'SE', ibge: 28 },
  { estado: 'São Paulo', UF: 'SP', ibge: 35 },
  { estado: 'Tocantins', UF: 'TO', ibge: 17 },
]

const estadosSemMT = [
  { estado: '', UF: '' },
  { estado: 'Acre', UF: 'AC', ibge: 12 },
  { estado: 'Alagoas', UF: 'AL', ibge: 27 },
  { estado: 'Amazonas', UF: 'AM', ibge: 13 },
  { estado: 'Amapá', UF: 'AP', ibge: 16 },
  { estado: 'Bahia', UF: 'BA', ibge: 29 },
  { estado: 'Ceará', UF: 'CE', ibge: 23 },
  { estado: 'Distrito Federal', UF: 'DF', ibge: 53 },
  { estado: 'Espirito Santo', UF: 'ES', ibge: 32 },
  { estado: 'Goiás', UF: 'GO', ibge: 52 },
  { estado: 'Maranhão', UF: 'MA', ibge: 21 },
  { estado: 'Minas Gerais', UF: 'MG', ibge: 31 },
  { estado: 'Mato Grosso do Sul', UF: 'MS', ibge: 50 },
  //{ estado: 'Mato Grosso', UF: 'MT' },
  { estado: 'Pará', UF: 'PA', ibge: 15 },
  { estado: 'Paraíba', UF: 'PB', ibge: 25 },
  { estado: 'Pernambuco', UF: 'PE', ibge: 26 },
  { estado: 'Piauí', UF: 'PI', ibge: 22 },
  { estado: 'Paraná', UF: 'PR', ibge: 41 },
  { estado: 'Rio de janeiro', UF: 'RJ', ibge: 33 },
  { estado: 'Rio Grande do Norte', UF: 'RN', ibge: 24 },
  { estado: 'Rondônia', UF: 'RO', ibge: 11 },
  { estado: 'Roraima', UF: 'RR', ibge: 14 },
  { estado: 'Rio Grande do Sul', UF: 'RS', ibge: 43 },
  { estado: 'Santa Catarina', UF: 'SC', ibge: 42 },
  { estado: 'Sergipe', UF: 'SE', ibge: 28 },
  { estado: 'São Paulo', UF: 'SP', ibge: 35 },
  { estado: 'Tocantins', UF: 'TO', ibge: 17 },
]

describe('Store origem e destino', () => {
  it('origem AC', () => {
    store.dados.orig = 'AC'
    //console.log('xxxxxxxxxx', store.destino, estadosSemAC)
    assert.deepEqual(store.destino, estadosSemAC)
  })

  it('origem MT', () => {
    store.dados.orig = 'MT'
    assert.deepEqual(store.destino, estadosSemMT)
  })

  it('destino AC', () => {
    store.dados.dest = 'AC'
    assert.deepEqual(store.origem, estadosSemAC)
  })

  it('destino MT', () => {
    store.dados.dest = 'MT'
    assert.deepEqual(store.origem, estadosSemMT)
  })
})

describe('Store hospedeiros nomeSci', () => {
  it('unique values Nome Sci', () => {
    const names = hospedeiros.map((v) => v.nomeSci)
    const uniqueNames = [...new Set(names)]
    assert.strictEqual(names.length, uniqueNames.length)
  })

  it('nomeVul is an array of strings', () => {
    hospedeiros.forEach((h) => {
      assert(Array.isArray(h.nomeVul))
      h.nomeVul.forEach((v) => assert.strictEqual(typeof v, 'string'))
    })
  })
})

describe('Store partes', () => {
  it('de Acerola', () => {
    //debugger
    store.dados.hospSci = 'Malpighia spp.'
    assert.deepEqual(store.partes, [''])
  })

  it('de Banana', () => {
    store.dados.hospSci = 'Musa spp.'
    assert.deepEqual(store.partes, [
      '',
      'flores',
      'frutos',
      'material para pesquisa',
      'mudas',
      'rizomas',
    ])
  })

  it('de Citrus', () => {
    store.dados.hospSci = 'Citrus spp.'
    assert.deepEqual(store.partes, [
      '',
      'caules',
      'estacas',
      'flores',
      'folhas',
      'frutos',
      'gemas',
      'material de propagação',
      'material de propagação vegetativo',
      'mudas',
      'plantas',
      'raízes',
      'ramas',
      'ramos',
    ])
  })

  /* it('de Mandioca', () => {
    store.dados.hospSci = 'Manihot esculenta'
    assert(store.partes,['', 'estaca', 'madeira', 'maniva'])
  }) */
})

describe('Store: gender', () => {
  it('Acacia sp.', () => {
    store.dados.hospSci = 'Acacia sp.'
    assert.strictEqual(store.gender, 'Acacia')
  })

  it('Acer macrophyllum', () => {
    store.dados.hospSci = 'Acer macrophyllum'
    assert.strictEqual(store.gender, 'Acer')
  })

  it('Betula lutea (synonym: alleghaniensis) ', () => {
    store.dados.hospSci = 'Betula lutea (synonym: alleghaniensis)'
    assert.strictEqual(store.gender, 'Betula')
  })
})

describe('Store filtro geral', () => {
  before(() => {
    store.dados.hospSci = 'Musa spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.dest = 'MT'
  })

  it('Musa spp. count', () => {
    assert.strictEqual(store.result.length, 3)
  })
  it('Musa spp. legis', () => {
    assert.deepEqual(
      store.result.flatMap((v) => v.files).map((v) => v.link),
      ['IN17-2009.pdf', 'IN17-2005.pdf', 'IN17-2005.pdf'],
    )
  })

  it('Musa spp. pragas', () => {
    assert.deepEqual(
      store.result.map((v) => v.pragc),
      ['MOKO-DA-BANANEIRA', 'SIGATOKA NEGRA', 'SIGATOKA NEGRA'],
    )
  })

  it('Eugenia uniflora', () => {
    store.dados.hospSci = 'Eugenia uniflora'
    store.dados.prod = 'frutos'
    store.dados.orig = 'PI'
    store.dados.dest = 'DF'
    assert.strictEqual(store.result.length, 1)
  })

  it('Malus spp.', () => {
    store.dados.hospSci = 'Malus spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'SC'
    store.dados.dest = 'MT'
    assert.strictEqual(store.result.length, 1)
    assert.deepEqual(
      store.result.flatMap((v) => v.files).map((v) => v.link),
      ['IN20-2013.pdf'],
    )
    assert.deepEqual(
      store.result.map((v) => v.pragc),
      ['CANCRO EUROPEU DAS POMÁCEAS'],
    )
  })

  it('Citrus sinensis sementes SP->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'sementes'
    store.dados.orig = 'SP'
    store.dados.dest = 'ES'
    assert.strictEqual(store.result.length, 0)
    //assert.deepEqual(store.result.map(v => v.pragc), ['CANCRO CÍTRICO', 'HLB'])
  })

  it('Citrus sinensis sementes RS->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'material de propagação'
    store.dados.orig = 'RS'
    store.dados.dest = 'ES'
    assert.strictEqual(store.result.length, 1)
    assert.deepEqual(
      store.result.flatMap((v) => v.files).map((v) => v.link),
      ['IN21-2018.pdf'],
    )
    assert.deepEqual(
      store.result.map((v) => v.pragc),
      ['CANCRO CÍTRICO'],
    )
  })

  it('Citrus sinensis mudas SP->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'mudas'
    store.dados.orig = 'SP'
    store.dados.dest = 'ES'
    assert.strictEqual(store.result.length, 3)
    assert.deepEqual(
      store.result.flatMap((v) => v.files).map((v) => v.link),
      ['PORT317-2021.pdf', 'PORT317-2021.pdf', 'IN21-2018.pdf'],
    )
    assert.deepEqual(
      store.result.map((v) => v.pragc),
      ['HLB', 'HLB', 'CANCRO CÍTRICO'],
    )
    // assert.deepStrictEqual(store.result, snap)
  })
})

describe('Sync between NomeVulg and NomeSci', () => {
  it('should define NomeVulg based in NomeSci', () => {
    const e: EventChange = {
      currentTarget: { name: 'hospSci', value: 'Musa spp.' },
    }
    store.handleChanges(e as unknown as Event)
    // Add assertions for new fields if necessary, or ensure existing tests pass
    store.handleChanges(e as unknown as Event)
    assert.strictEqual(store.dados.hospVul, 'Banana')
  })

  it('should define NomeSci based in NomeVulg', () => {
    const e: EventChange = {
      currentTarget: { name: 'hospVul', value: 'Banana' },
    }
    store.handleChanges(e as unknown as Event)
    assert.strictEqual(store.dados.hospSci, 'Musa spp.')
  })

  it('should maintain current NomeVulg if valid for new NomeSci', () => {
    // Picea abies has ['Abeto Europeu', 'Abeto Vermelho Comum', 'Noruega Abeto']
    store.dados.hospVul = 'Noruega Abeto'
    const e: EventChange = {
      currentTarget: { name: 'hospSci', value: 'Picea abies' },
    }
    store.handleChanges(e as unknown as Event)
    assert.strictEqual(store.dados.hospVul, 'Noruega Abeto')
  })

  it('should pick first NomeVulg if current is invalid for new NomeSci', () => {
    store.dados.hospVul = 'Banana'
    const e: EventChange = {
      currentTarget: { name: 'hospSci', value: 'Picea abies' },
    }
    store.handleChanges(e as unknown as Event)
    assert.strictEqual(store.dados.hospVul, 'Abeto Europeu')
  })
})

test('Check normalization of db ', () => {
  regras.map((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag)
    if (!praga) {
      assert.strictEqual(regra.prag, praga)
      //throw Error(`Dados da praga ${regra.prag} não cadastrados.`)
    }
    return regra
  })
})

test('no duplicate common names in same species record', () => {
  hospedeiros.forEach((h) => {
    const uniqueVul = [...new Set(h.nomeVul)]
    assert.strictEqual(h.nomeVul.length, uniqueVul.length)
  })
})

test('should join Pragas and Regras', () => {
  regras.forEach((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag)
    assert.notStrictEqual(praga, undefined)
  })
})

it('should be reactive when updating dados fields', () => {
  // Accessing a computed property that depends on dados
  store.completed

  store.dados.hospSci = 'Citrus spp.'
  store.dados.hospVul = 'Citros'
  store.dados.prod = 'frutos'
  store.dados.orig = 'AC'
  store.dados.dest = 'BA'

  assert.equal(store.completed, true)
})
