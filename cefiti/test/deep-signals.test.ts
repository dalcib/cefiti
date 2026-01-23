import assert from 'node:assert/strict'
import { afterEach, beforeEach, describe, it, mock } from 'node:test'
import { h, render } from 'preact'
import { act } from 'preact/test-utils'
import { deepSignal /* useDeepSignal */ } from '../src/deep-signals.ts'
import { doc } from './dom-mock.ts'

describe('deepsignal (preact)', () => {
  let scratch: HTMLElement

  beforeEach(() => {
    scratch = doc.createElement('div') as unknown as HTMLElement
  })

  afterEach(() => {
    render(null, scratch)
  })

  describe('direct signal bindigns', () => {
    it('should update deepSignal-based Text (no parent component)', () => {
      const state = deepSignal({ test: 'test' })
      render(h('span', null, state.$test), scratch)

      // biome-ignore lint/style/noNonNullAssertion: Test setup guarantees existence
      const text = scratch.firstChild!.firstChild! as unknown as { data: string }
      assert.strictEqual(text.data, 'test')

      act(() => {
        state.test = 'changed'
      })

      // biome-ignore lint/style/noNonNullAssertion: Test setup guarantees existence
      assert.strictEqual(scratch.firstChild!.firstChild!, text as unknown as ChildNode)
      assert.strictEqual(text.data, 'changed')
    })

    it('should update deepSignal-based Text (in a parent component)', async () => {
      const state = deepSignal({ test: 'test' })
      const spy = mock.fn()
      // biome-ignore lint/suspicious/noExplicitAny: Component props in tests
      function App({ x }: { x: any }) {
        spy()
        return h('span', null, x)
      }
      render(h(App, { x: state.$test }), scratch)

      const initialCallCount = spy.mock.callCount()

      // biome-ignore lint/style/noNonNullAssertion: Test setup guarantees existence
      const text = scratch.firstChild!.firstChild! as unknown as { data: string }
      assert.strictEqual(text.data, 'test')

      act(() => {
        state.test = 'changed'
      })

      // biome-ignore lint/style/noNonNullAssertion: Test setup guarantees existence
      assert.strictEqual(scratch.firstChild!.firstChild!, text as unknown as ChildNode)
      assert.strictEqual(text.data, 'changed')

      // Ensure no re-render of App (because signal was passed directly as text content?)
      assert.strictEqual(spy.mock.callCount(), initialCallCount)
    })

    it('should update props without re-rendering', async () => {
      const state = deepSignal({ test: 'initial' })
      const spy = mock.fn()
      function Wrap() {
        spy()
        return h('input', { value: state.$test })
      }
      render(h(Wrap, null), scratch)

      const initialCallCount = spy.mock.callCount()

      assert.strictEqual((scratch.firstChild as unknown as HTMLInputElement).value, 'initial')

      act(() => {
        state.test = 'updated'
      })

      assert.strictEqual((scratch.firstChild as unknown as HTMLInputElement).value, 'updated')
      assert.strictEqual(spy.mock.callCount(), initialCallCount)

      act(() => {
        state.test = 'second update'
      })

      assert.strictEqual((scratch.firstChild as unknown as HTMLInputElement).value, 'second update')
      assert.strictEqual(spy.mock.callCount(), initialCallCount)
    })
  })

  describe('component bindings', () => {
    it('should subscribe to deepSignals', () => {
      const state = deepSignal({ test: 'foo' })

      function App() {
        return h('p', null, state.test)
      }

      render(h(App, null), scratch)
      assert.strictEqual(scratch.textContent, 'foo')

      act(() => {
        state.test = 'bar'
      })

      assert.strictEqual(scratch.textContent, 'bar')
    })

    it('should not subscribe to unrelated deepSignals', () => {
      const state = deepSignal({ test: 'foo', unrelated: 'bar' })

      const spy = mock.fn()
      function App() {
        spy()
        return h('p', null, state.test)
      }

      render(h(App, null), scratch)
      const initialCallCount = spy.mock.callCount()
      assert.strictEqual(initialCallCount, 1)

      act(() => {
        state.unrelated = 'baz'
      })

      assert.strictEqual(spy.mock.callCount(), initialCallCount)
    })

    it('should not subscribe to child signals', () => {
      const state = deepSignal({ test: 'foo' })

      function Child() {
        return h('p', null, state.test)
      }

      const spy = mock.fn()
      function App() {
        spy()
        return h(Child, null)
      }

      render(h(App, null), scratch)
      assert.strictEqual(scratch.textContent, 'foo')
      const initialCallCount = spy.mock.callCount()

      act(() => {
        state.test = 'bar'
      })

      assert.strictEqual(spy.mock.callCount(), initialCallCount)
    })
  })
})
