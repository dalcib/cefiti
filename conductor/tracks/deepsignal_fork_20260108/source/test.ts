import { describe, it } from "node:test";
import assert from "node:assert";
import { deepSignal } from "./index.ts";
import { effect } from "@preact/signals";

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

    it("should support filter override", () => {
        const arr = deepSignal([{ val: 1 }, { val: 2 }]);
        const res = arr.filter(i => i.val === 1);
        assert.strictEqual(res.length, 1);
        assert.strictEqual(res[0].val, 1);
    });
});
