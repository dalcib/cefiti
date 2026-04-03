import assert from 'node:assert/strict'
import { beforeEach, describe, it } from 'node:test'
import { Store } from '../src/store.ts'

describe('Routing Tests', () => {
  let store: Store
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

    store = new Store()
  })

  it('should initialize with default view "home"', () => {
    assert.strictEqual(store.view, 'home')
  })

  it('should navigate to result when search is performed', () => {
    // Complete form data to allow search
    store.dados.hospSci = 'Musa spp.'
    store.dados.hospVul = 'Banana'
    store.dados.hospId = 41
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.dest = 'SP'

    // biome-ignore lint/suspicious/noExplicitAny: Mocking Event
    store.handleSearch({ preventDefault: () => {} } as any)
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
    const newStore = new Store()
    assert.strictEqual(newStore.view, 'base')
  })
})
