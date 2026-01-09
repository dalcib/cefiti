import { performance } from 'perf_hooks'
import { Store as NewStore } from './store.ts'
import { createOldStore } from './store.old.ts'

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
    // Reset state for fairness if needed, but store.clean() inside scenario handles it
    runFn(store)
  }
  const endRun = performance.now()
  const totalTime = endRun - startRun
  const avgTime = totalTime / iterations

  console.log(`  Total Run Time (${iterations} iterations): ${totalTime.toFixed(4)}ms`)
  console.log(`  Avg per iteration: ${avgTime.toFixed(4)}ms`)
  
  // Memory (approx)
  if (globalThis.gc) { globalThis.gc() }
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`  Memory (Heap Used): ${used.toFixed(2)} MB`);

  return { setup: endSetup - startSetup, totalRun: totalTime }
}

const scenario = (store: any) => {
  store.clean()
  
  // 1. Select Species (triggers filtering)
  // Note: Old store requires name/value on currentTarget. New store supports it too.
  const event1 = { currentTarget: { name: 'hospSci', value: 'Citrus spp.' } } as any
  store.handleChanges(event1)
  
  // Access computed to force evaluation
  const r1 = store.result
  const l1 = Array.isArray(r1) ? r1.length : r1.value.length

  // 2. Select Origin
  const event2 = { currentTarget: { name: 'orig', value: 'SP' } } as any
  store.handleChanges(event2)
  
  const r2 = store.result
  const l2 = Array.isArray(r2) ? r2.length : r2.value.length

  // 3. Select Destination
  const event3 = { currentTarget: { name: 'dest', value: 'BA' } } as any
  store.handleChanges(event3)
  
  const r3 = store.result
  const l3 = Array.isArray(r3) ? r3.length : r3.value.length
}

// Check imports
try {
  const oldStore = createOldStore()
  const newStore = new NewStore()
  
  const resultsOld = benchmark('Old Store (deepSignal)', () => createOldStore(), scenario, 1000)
  const resultsNew = benchmark('New Store (@preact/signals)', () => new NewStore(), scenario, 1000)

  console.log('\n--- Comparative Analysis ---')
  console.log(`Setup Delta (New - Old): ${(resultsNew.setup - resultsOld.setup).toFixed(4)}ms`)
  console.log(`Run Delta (New - Old): ${(resultsNew.totalRun - resultsOld.totalRun).toFixed(4)}ms`)
  
  const ratio = resultsOld.totalRun / resultsNew.totalRun
  if (ratio > 1) {
    console.log(`Performance: New Store is ${ratio.toFixed(2)}x FASTER`)
  } else {
    console.log(`Performance: New Store is ${(1/ratio).toFixed(2)}x SLOWER`)
  }

} catch (e) {
  console.error('Benchmark failed:', e)
}
