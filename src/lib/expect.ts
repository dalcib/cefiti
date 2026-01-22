import assert from 'node:assert'

export {
  after,
  afterEach,
  before,
  beforeEach,
  describe,
  it,
  mock,
  test,
} from 'node:test'

interface Expect<T> {
  toBe(expected: T): void
  toEqual(expected: T): void
  toBeTruthy(): void
  toBeFalsy(): void
  toBeGreaterThan(expected: number): void
  toBeGreaterThanOrEqual(expected: number): void
  toBeLessThan(expected: number): void
  toContain(
    expected: T extends readonly (infer U)[]
      ? U
      : T extends string
        ? string
        : unknown,
  ): void
  toHaveProperty(property: string | number | symbol, value?: unknown): void
  toBeInstanceOf<U>(expectedClass: new (...args: unknown[]) => U): void
  toMatch(expectedRegex: RegExp): void
  toHaveBeenCalled(): void
  toHaveBeenCalledTimes(times: number): void
}

function expect<T>(actual: T): Expect<T> {
  return {
    toBe: (expected) => {
      assert.strictEqual(actual, expected)
    },
    toEqual: (expected) => {
      assert.deepStrictEqual(actual, expected)
    },
    toBeTruthy: () => {
      assert.ok(actual)
    },
    toBeFalsy: () => {
      assert.ok(!actual)
    },
    toBeGreaterThan: (expected) => {
      if (typeof actual !== 'number') {
        throw new Error('toBeGreaterThan can only be used with numbers')
      }
      assert.ok(actual > expected)
    },
    toBeGreaterThanOrEqual: (expected: number) => {
      if (typeof actual !== 'number') {
        throw new Error('toBeGreaterThanOrEqual can only be used with numbers')
      }
      assert.ok(actual >= expected)
    },
    toBeLessThan: (expected) => {
      if (typeof actual !== 'number') {
        throw new Error('toBeLessThan can only be used with numbers')
      }
      assert.ok(actual < expected)
    },
    toContain: (expected) => {
      if (Array.isArray(actual) || typeof actual === 'string') {
        assert.ok(actual.includes(expected as string))
      } else {
        throw new Error('toContain can only be used with arrays or strings')
      }
    },
    toHaveProperty: (
      property: string | number | symbol,
      ...args: unknown[]
    ) => {
      if (typeof actual === 'object' && actual !== null) {
        assert.ok(property in actual)
        if (args.length > 0) {
          assert.deepStrictEqual(
            (actual as Record<string | number | symbol, unknown>)[property],
            args[0],
          )
        }
      } else {
        throw new Error('toHaveProperty can only be used with objects')
      }
    },

    toBeInstanceOf: <U>(expectedClass: new (...args: unknown[]) => U) => {
      assert.ok(actual instanceof expectedClass)
    },
    toMatch: (expectedRegex) => {
      if (typeof actual === 'string') {
        assert.ok(expectedRegex.test(actual))
      } else {
        throw new Error('toMatch can only be used with strings')
      }
    },
    toHaveBeenCalled: () => {
      if (
        typeof actual === 'function' &&
        typeof (actual as unknown as { mock: object }).mock === 'object'
      ) {
        assert.ok(
          (
            actual as unknown as { mock: { callCount: () => number } }
          ).mock.callCount() > 0,
        )
      } else {
        throw new Error('toHaveBeenCalled can only be used with mock functions')
      }
    },
    toHaveBeenCalledTimes: (times: number) => {
      if (
        typeof actual === 'function' &&
        typeof (actual as unknown as { mock: object }).mock === 'object'
      ) {
        assert.strictEqual(
          (
            actual as unknown as { mock: { callCount: () => number } }
          ).mock.callCount(),
          times,
        )
      } else {
        throw new Error(
          'toHaveBeenCalledTimes can only be used with mock functions',
        )
      }
    },
  }
}

export { expect }
