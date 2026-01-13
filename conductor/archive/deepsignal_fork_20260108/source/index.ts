import { signal, computed, Signal } from "@preact/signals";

const proxyToSignals = new WeakMap<object, Map<string | symbol, Signal<any>>>();
const objToProxy = new WeakMap<object, any>();
const ignore = new WeakSet<object>();

const shouldProxy = (val: any): boolean => {
  if (typeof val !== "object" || val === null) return false;
  if (val instanceof Signal) return false;
  if (ignore.has(val)) return false;
  return true;
};

export const shallow = <T extends object>(obj: T): T => {
  ignore.add(obj);
  return obj;
};

export const deepSignal = <T extends object>(obj: T): T => {
  if (!shouldProxy(obj)) return obj;
  if (objToProxy.has(obj)) return objToProxy.get(obj);

  const handler = Array.isArray(obj) ? arrayHandlers : objectHandlers;
  const proxy = new Proxy(obj, handler);
  objToProxy.set(obj, proxy);
  return proxy as T;
};

const getSignal = (target: object, key: string | symbol, receiver: any) => {
  let signals = proxyToSignals.get(receiver);
  if (!signals) {
    signals = new Map();
    proxyToSignals.set(receiver, signals);
  }

  if (!signals.has(key)) {
    let value = Reflect.get(target, key, receiver);
    if (shouldProxy(value)) {
      value = deepSignal(value);
    }
    signals.set(key, signal(value));
  }
  return signals.get(key)!;
};

const objectHandlers: ProxyHandler<object> = {
  get(target, key, receiver) {
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

const arrayHandlers: ProxyHandler<any[]> = {
  get(target, key, receiver) {
    // OPTIMIZATION: Override iteration methods to bypass index access traps
    if (key === 'map' || key === 'filter' || key === 'forEach' || key === 'find' || key === 'some' || key === 'every' || key === 'reduce') {
        return (...args: any[]) => {
            // Track length to ensure dependency on array mutations
            getSignal(target, 'length', receiver).value;
            
            // Native method on raw target
            const func = Array.prototype[key as any];
            
            return func.apply(target, args.map((arg, i) => {
                // Wrap callback
                if (typeof arg === 'function') {
                    return (item: any, index: number, arr: any[]) => {
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