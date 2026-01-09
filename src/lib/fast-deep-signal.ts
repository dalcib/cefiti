import { signal, computed, Signal } from "@preact/signals";
import { useMemo } from "preact/hooks";

const proxyToSignals = new WeakMap<object, Map<string | symbol, Signal<any>>>();
const objToProxy = new WeakMap<object, any>();
const ignore = new WeakSet<object>();

const shouldProxy = (val: any): boolean => {
  if (typeof val !== "object" || val === null) return false;
  if (val instanceof Signal) return false;
  if (ignore.has(val)) return false;
  return true;
};

export type DeepSignal<T> = T & {
  [K in keyof T as K extends string ? `$${K}` : never]: Signal<T[K]>
};

export const shallow = <T extends object>(obj: T): T => {
  ignore.add(obj);
  return obj;
};

export const deepSignal = <T extends object>(obj: T): DeepSignal<T> => {
  if (!shouldProxy(obj)) return obj as DeepSignal<T>;
  if (objToProxy.has(obj)) return objToProxy.get(obj);

  const handler = Array.isArray(obj) ? arrayHandlers : objectHandlers;
  const proxy = new Proxy(obj, handler);
  objToProxy.set(obj, proxy);
  return proxy as DeepSignal<T>;
};

export const useDeepSignal = <T extends object>(obj: T): DeepSignal<T> => {
  return useMemo(() => deepSignal(obj), []);
};

function getDescriptor(target: any, key: string | symbol): PropertyDescriptor | undefined {
  let current = target;
  while (current) {
    const desc = Object.getOwnPropertyDescriptor(current, key);
    if (desc) return desc;
    current = Object.getPrototypeOf(current);
  }
  return undefined;
}

const getSignal = (target: object, key: string | symbol, receiver: any) => {
  let signals = proxyToSignals.get(receiver);
  if (!signals) {
    signals = new Map();
    proxyToSignals.set(receiver, signals);
  }

  if (!signals.has(key)) {
    const desc = getDescriptor(target, key);
    if (desc && typeof desc.get === 'function') {
      // It's a getter, use computed
      signals.set(key, computed(() => Reflect.get(target, key, receiver)));
    } else {
      let value = Reflect.get(target, key, receiver);
      if (shouldProxy(value)) {
        value = deepSignal(value);
      }
      signals.set(key, signal(value));
    }
  }
  return signals.get(key)!;
};

const objectHandlers: ProxyHandler<object> = {
  get(target, key, receiver) {
    if (typeof key === 'string' && key.startsWith('$')) {
      const actualKey = key.slice(1);
      if (actualKey in target) {
        return getSignal(target, actualKey, receiver);
      }
    }
    const s = getSignal(target, key, receiver);
    return s.value;
  },
  set(target, key, value, receiver) {
    if (typeof key === 'string' && key.startsWith('$')) {
      // Direct signal assignment not typically supported in deepsignal this way?
      // deepsignal usually throws on mutation of $prop?
      // But for compatibility with test setting state.test = ..., that's normal set.
      // If setting state.$test = ..., maybe throw?
      // We'll ignore setting $prop for now or throw.
      return true;
    }

    const s = getSignal(target, key, receiver);

    if (shouldProxy(value)) {
      value = deepSignal(value);
    }
    const result = Reflect.set(target, key, value, receiver);

    const desc = getDescriptor(target, key);
    if (!desc || typeof desc.get !== 'function') {
      s.value = value;
    }

    return result;
  },
};

const arrayHandlers: ProxyHandler<any[]> = {
  get(target, key, receiver) {
    if (typeof key === 'string' && key.startsWith('$')) {
      if (key === '$length') return getSignal(target, 'length', receiver);
      const actualKey = key.slice(1);
      // Check if index
      if (!isNaN(Number(actualKey))) {
        return getSignal(target, actualKey, receiver);
      }
    }

    // OPTIMIZATION: Override iteration methods to bypass index access traps
    if (key === 'map' || key === 'filter' || key === 'forEach' || key === 'find' || key === 'some' || key === 'every' || key === 'reduce') {
      return (...args: any[]) => {
        // Track length to ensure dependency on array mutations
        getSignal(target, 'length', receiver).value;

        // Native method on raw target
        const func = Array.prototype[key as any];

        return func.apply(target, args.map((arg) => {
          // Wrap callback
          if (typeof arg === 'function') {
            return (item: any, index: number/*, arr: any[]*/) => {
              // Pass PROXY of item to callback to ensure deep tracking
              return arg(deepSignal(item), index, receiver);
            }
          }
          return arg;
        }));
      }
    }

    const s = getSignal(target, key, receiver);
    return s.value;
  },
  set(target, key, value, receiver) {
    const s = getSignal(target, key, receiver);
    if (shouldProxy(value)) {
      value = deepSignal(value);
    }
    const result = Reflect.set(target, key, value, receiver);
    s.value = value;
    return result;
  },
};