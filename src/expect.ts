import assert from 'node:assert'
export * from 'node:test'

interface Expect {
  toBe<T>(expected: T): void
  toEqual<T>(expected: T): void
  toBeTruthy(): void
  toBeFalsy(): void
  toBeGreaterThan(expected: number): void
  toBeGreaterThanOrEqual(expected: number): void
  toBeLessThan(expected: number): void
  toContain<T>(expected: T): void
  toHaveProperty<T extends object, K extends keyof T>(
    property: K,
    value?: T[K]
  ): void
  toBeInstanceOf<T>(expectedClass: new (...args: unknown[]) => T): void
  toMatch(expectedRegex: RegExp): void
  toHaveBeenCalled(): void
  toHaveBeenCalledTimes(times: number): void
}

function expect<T>(actual: T): Expect {
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
        throw new Error('toBeGreaterThan can only be used with numbers')
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
    toHaveProperty: function <U extends object, K extends keyof U>(
      property: K,
      value?: U[K]
    ) {
      if (typeof actual === 'object' && actual !== null) {
        assert.ok(Object.prototype.hasOwnProperty.call(actual, property))
        if (arguments.length === 2) {
          assert.deepStrictEqual((actual as unknown as U)[property], value)
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
          ).mock.callCount() > 0
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
          times
        )
      } else {
        throw new Error(
          'toHaveBeenCalledTimes can only be used with mock functions'
        )
      }
    },
  }
}

export { expect }
