class Counter {
    constructor() {
        this.value = 0;
    }

    add(n) {
        this.value += n;
        return this;    // ← チェーンOK
    }

    multiply(n) {
        this.value *= n;
        return this;    // ← チェーンOK
    }
}

const c = new Counter();
c.add(5).multiply(3).add(1);

console.log(c.value); // 16