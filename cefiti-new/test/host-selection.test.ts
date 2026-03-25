import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { type Hospedeiro, hospedeiros } from '#db-next'
import { store } from '../src/store.ts'

type EventChange = {
  currentTarget: { name: string; value: string }
}

describe('Host Selection Sync', () => {
  it('should sync NomeVulg and hospId when NomeSci is selected', () => {
    // Musa spp. has id 189 and NomeVul "Banana"
    const targetHost = (hospedeiros as Hospedeiro[]).find(
      (h: Hospedeiro) => h.nomeSci === 'Musa spp.',
    )
    assert(targetHost, 'Musa spp. not found in db')

    const e: EventChange = {
      currentTarget: { name: 'hospSci', value: 'Musa spp.' },
    }
    store.handleChanges(e as unknown as Event)

    assert.strictEqual(store.dados.hospSci, 'Musa spp.')
    assert.strictEqual(store.dados.hospVul, 'Banana')
    assert.strictEqual(store.dados.hospId, targetHost.id)
  })

  it('should sync NomeSci and hospId when NomeVul is selected', () => {
    // Citrus spp. has id 103 and NomeVul ["Citros"]
    const targetHost = (hospedeiros as Hospedeiro[]).find(
      (h: Hospedeiro) => h.nomeSci === 'Citrus spp.',
    )
    assert(targetHost, 'Citrus spp. not found in db')

    const e: EventChange = {
      currentTarget: { name: 'hospVul', value: 'Citros' },
    }
    store.handleChanges(e as unknown as Event)

    assert.strictEqual(store.dados.hospVul, 'Citros')
    assert.strictEqual(store.dados.hospSci, 'Citrus spp.')
    assert.strictEqual(store.dados.hospId, targetHost.id)
  })

  it('should maintain current NomeVul if valid for new NomeSci', () => {
    // Picea abies has ['Abeto Europeu', 'Abeto Vermelho Comum', 'Noruega Abeto']
    const targetHost = (hospedeiros as Hospedeiro[]).find(
      (h: Hospedeiro) => h.nomeSci === 'Picea abies',
    )
    assert(targetHost, 'Picea abies not found in db')

    store.dados.hospVul = 'Noruega Abeto'
    const e: EventChange = {
      currentTarget: { name: 'hospSci', value: 'Picea abies' },
    }
    store.handleChanges(e as unknown as Event)

    assert.strictEqual(store.dados.hospSci, 'Picea abies')
    assert.strictEqual(store.dados.hospVul, 'Noruega Abeto')
    assert.strictEqual(store.dados.hospId, targetHost.id)
  })

  it('should pick first NomeVulg if current is invalid for new NomeSci', () => {
    store.dados.hospVul = 'Banana'
    const e: EventChange = {
      currentTarget: { name: 'hospSci', value: 'Picea abies' },
    }
    store.handleChanges(e as unknown as Event)

    assert.strictEqual(store.dados.hospSci, 'Picea abies')
    assert.strictEqual(store.dados.hospVul, 'Abeto Europeu') // First one for Picea abies
    assert.notStrictEqual(store.dados.hospId, 0)
  })

  it('should reset hospId when store is cleaned', () => {
    store.dados.hospId = 123
    store.clean()
    assert.strictEqual(store.dados.hospId, 0)
  })
})
