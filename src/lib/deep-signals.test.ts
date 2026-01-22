import { h, render } from 'preact'
import { act } from 'preact/test-utils'
import { deepSignal, /* useDeepSignal */ } from './deep-signals.ts'
import { doc } from './dom-mock.ts'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  mock,
} from './expect.ts'

describe('deepsignal (preact)', () => {
  let scratch: HTMLElement

  // Simple rerender hook
  /*const setupRerender = () => {
    let module: any;
    try { module = require("preact/test-utils"); } catch (e) { }
    if (module && module.setupRerender) return module.setupRerender();
    return () => { };
  };*/

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
      const text = scratch.firstChild!.firstChild!
      expect(text).toHaveProperty('data', 'test')

      act(() => {
        state.test = 'changed'
      })

      // biome-ignore lint/style/noNonNullAssertion: Test setup guarantees existence
      expect(scratch.firstChild!.firstChild!).toBe(text)
      expect(text).toHaveProperty('data', 'changed')
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

      // biome-ignore lint/suspicious/noExplicitAny: Mock inspection
      const initialCallCount = (spy as any).mock.callCount()

      // biome-ignore lint/style/noNonNullAssertion: Test setup guarantees existence
      const text = scratch.firstChild!.firstChild!
      expect(text).toHaveProperty('data', 'test')

      act(() => {
        state.test = 'changed'
      })

      // biome-ignore lint/style/noNonNullAssertion: Test setup guarantees existence
      expect(scratch.firstChild!.firstChild!).toBe(text)
      expect(text).toHaveProperty('data', 'changed')

      // Ensure no re-render of App (because signal was passed directly as text content?)
      // Actually if we pass signal as prop, and use it in JSX, Preact optimized it.
      expect(spy).toHaveBeenCalledTimes(initialCallCount)
    })

    it('should update props without re-rendering', async () => {
      const state = deepSignal({ test: 'initial' })
      const spy = mock.fn()
      function Wrap() {
        spy()
        return h('input', { value: state.$test })
      }
      render(h(Wrap, null), scratch)

      // biome-ignore lint/suspicious/noExplicitAny: Mock inspection
      const initialCallCount = (spy as any).mock.callCount()

      expect(scratch.firstChild).toHaveProperty('value', 'initial')

      act(() => {
        state.test = 'updated'
      })

      expect(scratch.firstChild).toHaveProperty('value', 'updated')
      expect(spy).toHaveBeenCalledTimes(initialCallCount)

      act(() => {
        state.test = 'second update'
      })

      expect(scratch.firstChild).toHaveProperty('value', 'second update')
      expect(spy).toHaveBeenCalledTimes(initialCallCount)
    })
  })

  describe('component bindings', () => {
    it('should subscribe to deepSignals', () => {
      const state = deepSignal({ test: 'foo' })

      function App() {
        return h('p', null, state.test)
      }

      render(h(App, null), scratch)
      expect(scratch.textContent).toBe('foo')

      act(() => {
        state.test = 'bar'
      })

      expect(scratch.textContent).toBe('bar')
    })

    it('should not subscribe to unrelated deepSignals', () => {
      const state = deepSignal({ test: 'foo', unrelated: 'bar' })

      const spy = mock.fn()
      function App() {
        spy()
        return h('p', null, state.test)
      }

      render(h(App, null), scratch)
      // biome-ignore lint/suspicious/noExplicitAny: Mock inspection
      const initialCallCount = (spy as any).mock.callCount()
      expect(initialCallCount).toBe(1)

      act(() => {
        state.unrelated = 'baz'
      })

      expect(spy).toHaveBeenCalledTimes(initialCallCount)
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
      expect(scratch.textContent).toBe('foo')
      // biome-ignore lint/suspicious/noExplicitAny: Mock inspection
      const initialCallCount = (spy as any).mock.callCount()

      act(() => {
        state.test = 'bar'
      })

      expect(spy).toHaveBeenCalledTimes(initialCallCount)
    })
  })

  /*describe('useDeepSignal', () => {
    it('should return a deep signal that is internally stable', async () => {
      const spy = mock.fn()
      let state: any

      function App() {
        spy()
        state = useDeepSignal({ test: 'test' })
        return h('p', null, state.test)
      }

      render(h(App, null), scratch)

      expect(scratch.textContent).toBe('test')
      expect(spy).toHaveBeenCalledTimes(1)
      const stateAfterRender = state!

      act(() => {
        state!.test = 'updated'
      })

      expect(scratch.textContent).toBe('updated')
      expect(spy).toHaveBeenCalledTimes(2)
      expect(stateAfterRender).toBe(state!)
    })
  })*/
})
