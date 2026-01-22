import { computed, signal } from "@preact/signals";
import { deepSignal as originalDeepSignal } from "deepsignal";
import { performance } from "perf_hooks";
import { deepSignal as fastDeepSignal, shallow } from "./index.ts";

const COUNT = 10000;
const data = Array.from({ length: COUNT }, (_, i) => ({ val: i, other: 'data' }));

function benchmark(label: string, factory: (d: any) => any) {
    const store = factory(data);
    
    const start = performance.now();
    for(let i=0; i<100; i++) {
        // Access via proxy to trigger filter logic
        const res = store.filter ? store.filter((item: any) => item.val % 2 === 0) : store.value.filter((item: any) => item.val % 2 === 0);
        if (res.length !== COUNT / 2) throw new Error("Wrong result");
    }
    const end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(2)}ms`);
}

console.log("Benchmarking Array Filter (10k items, 100 iterations)");

// 1. Explicit Signals (Baseline)
const explicitSignal = signal(data);
// Warmup
explicitSignal.value.filter(i => i.val % 2 === 0);

const start = performance.now();
for(let i=0; i<100; i++) {
    const res = explicitSignal.value.filter(i => i.val % 2 === 0);
}
console.log(`Explicit Signals: ${(performance.now() - start).toFixed(2)}ms`);

// 2. Fast Deep Signal
benchmark("FastDeepSignal", (d) => fastDeepSignal(d));

// 3. Fast Deep Signal (Shallow)
benchmark("FastDeepSignal (Shallow)", (d) => fastDeepSignal(shallow(d)));

// 4. Original Deep Signal
benchmark("Original DeepSignal", (d) => originalDeepSignal(d));
