import assert from "node:assert";
import { describe, it } from "node:test";
import { effect } from "@preact/signals";
import { deepSignal } from "./index.ts";

describe("FastDeepSignal", () => {
    it("should be reactive", () => {
        const obj = deepSignal({ count: 0 });
        let value = 0;
        
        const dispose = effect(() => {
            value = obj.count;
        });
        
        assert.strictEqual(value, 0);
        obj.count++;
        assert.strictEqual(value, 1);
        dispose();
    });

    it("should be reactive for arrays", () => {
        const arr = deepSignal([{ val: 1 }]);
        let value = 0;
        
        const dispose = effect(() => {
            value = arr[0].val;
        });
        
        assert.strictEqual(value, 1);
        arr[0].val++;
        assert.strictEqual(value, 2);
        dispose();
    });

    it("should support class instances", () => {
        class Counter {
            count = 0;
            inc() { this.count++; }
        }
        const c = deepSignal(new Counter());
        let value = 0;
        const dispose = effect(() => value = c.count);
        
        assert.strictEqual(value, 0);
        c.inc();
        assert.strictEqual(value, 1);
        dispose();
    });
});
