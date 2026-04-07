import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import { storeDb } from '../src/store-db.ts'
import { StoreUi } from '../src/store-ui.ts'

describe('Routing Tests', () => {
  let store: StoreUi
  let currentHash = ''
  let listeners: Record<string, ((e?: unknown) => void)[]> = {}

  beforeEach(() => {
    currentHash = ''
    listeners = {}

    // Mock window environment
    globalThis.window = {
      location: {
        get hash() {
          return currentHash
        },
        set hash(v: string) {
          currentHash = v
        },
        pathname: '/',
        protocol: 'file:',
      },
      history: {
        pushState: (_data: unknown, _title: string, url: string) => {
          if (typeof url === 'string') {
            currentHash = url.startsWith('#') ? url : ''
          }
        },
      },
      addEventListener: (evt: string, cb: (e?: unknown) => void) => {
        listeners[evt] = listeners[evt] || []
        listeners[evt].push(cb)
      },
      dispatchEvent: (_evt: unknown) => {},
      print: () => {},
      gtag: () => {},
      // biome-ignore lint/suspicious/noExplicitAny: Intentional mock for testing logic
    } as any

    globalThis.alert = () => {}

    storeDb.clean()
    store = new StoreUi()
  })

  it('should initialize with default view "home"', () => {
    assert.strictEqual(store.view, 'home')
  })

  it('should navigate to result when search is performed', () => {
    // Complete form data in storeDb to allow search
    storeDb.dados.hospSci = 'Musa spp.'
    storeDb.dados.hospVul = 'Banana'
    storeDb.dados.hospId = 41
    storeDb.dados.prod = 'frutos'
    storeDb.dados.orig = 'MG'
    storeDb.dados.municipioOrigemId = '311110'
    storeDb.dados.dest = 'SP'
    storeDb.dados.municipioDestinoId = '355030'

    storeDb.handleSearch(() => store.navigate('result'))
    assert.strictEqual(store.view, 'result')
    assert.strictEqual(currentHash, '#result')
  })

  it('should navigate to base via handleMenu', () => {
    store.handleMenu('Base')
    assert.strictEqual(store.view, 'base')
    assert.strictEqual(currentHash, '#base')
  })

  it('should return to home via handleMenu (Voltar)', () => {
    store.handleMenu('Base') // set state to base
    assert.strictEqual(store.view, 'base')

    store.handleMenu('Voltar')
    assert.strictEqual(store.view, 'home')
    assert.strictEqual(currentHash, '')
  })

  it('should sync view when hash changes (popstate trigger)', () => {
    // Simulate user navigating via back/forward button or manual hash change
    currentHash = '#result'
    if (listeners.popstate) {
      for (const cb of listeners.popstate) cb()
    }
    assert.strictEqual(store.view, 'result')

    currentHash = '#base'
    if (listeners.popstate) {
      for (const cb of listeners.popstate) cb()
    }
    assert.strictEqual(store.view, 'base')

    currentHash = ''
    if (listeners.popstate) {
      for (const cb of listeners.popstate) cb()
    }
    assert.strictEqual(store.view, 'home')
  })

  it('should initialize with view from hash if present', () => {
    currentHash = '#base'
    const newStore = new StoreUi()
    assert.strictEqual(newStore.view, 'base')
  })
})
