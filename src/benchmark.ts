import { performance } from 'perf_hooks'
import { Store as RestoredStore } from './store.ts'
import { createOldStore as createBaselineStore } from './store.old.ts'

// Mock global objects
globalThis.alert = () => {}
globalThis.window = { gtag: () => {}, print: () => {} } as any

function benchmark(label: string, setupFn: () => any, runFn: (store: any) => void, iterations = 1000) {
  console.log(`\nBenchmarking: ${label}`)
  
  // Measure instantiation
  const startSetup = performance.now()
  let store = setupFn()
  const endSetup = performance.now()
  console.log(`  Setup Time (1 instance): ${(endSetup - startSetup).toFixed(4)}ms`)

  // Warmup
  runFn(store)

  // Run iterations
  const startRun = performance.now()
  for (let i = 0; i < iterations; i++) {
    runFn(store)
  }
  const endRun = performance.now()
  const totalTime = endRun - startRun
  const avgTime = totalTime / iterations

  console.log(`  Total Run Time (${iterations} iterations): ${totalTime.toFixed(4)}ms`)
  console.log(`  Avg per iteration: ${avgTime.toFixed(4)}ms`)
  
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`  Memory (Heap Used): ${used.toFixed(2)} MB`);

  return { setup: endSetup - startSetup, totalRun: totalTime }
}

const scenario = (store: any) => {
  store.clean()
  
  // 1. Select Species
  const event1 = { currentTarget: { name: 'hospSci', value: 'Citrus spp.' } } as any
  store.handleChanges(event1)
  const _1 = store.result.length

  // 2. Select Origin
  const event2 = { currentTarget: { name: 'orig', value: 'SP' } } as any
  store.handleChanges(event2)
  const _2 = store.result.length

  // 3. Select Destination
  const event3 = { currentTarget: { name: 'dest', value: 'BA' } } as any
  store.handleChanges(event3)
  const _3 = store.result.length
}

console.log("Performance Verification: Restored Store vs Baseline");

try {
  const resultsOld = benchmark('Baseline (Original deepSignal)', () => createBaselineStore(), scenario, 1000)
  // RestoredStore is the class. We need to wrap it in deepSignal as in store.ts
  // But store.ts exports the instance. For benchmark we want fresh instances.
  // In store.ts: export const store = deepSignal(new Store())
  // So we import deepSignal from the lib.
  const { deepSignal } = await import('./lib/fast-deep-signal.ts');
  const resultsNew = benchmark('Restored Store (FastDeepSignal + shallow)', () => deepSignal(new RestoredStore()), scenario, 1000)

  console.log('\n--- Comparative Analysis ---')
  const ratio = resultsOld.totalRun / resultsNew.totalRun
  console.log(`Performance: Restored Store is ${ratio.toFixed(2)}x FASTER than baseline`)

} catch (e) {
  console.error('Benchmark failed:', e)
}