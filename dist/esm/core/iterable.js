export class NumberMap {
}
;
export class StringMap {
}
;
export default class IterableStringMap {
    constructor() {
        this.values = new StringMap();
    }
    has(key) {
        return this.values.hasOwnProperty(key);
    }
    set(key, item) {
        this.values[key] = item;
    }
    get(key) {
        return this.values[key];
    }
    forEach(callbackfn) {
        let i = 0;
        for (const key in this.values) {
            callbackfn(this.values[key], i, this.values);
            i++;
        }
    }
    reduce(callbackfn, initialValue) {
        let previous = initialValue, i = 0;
        for (const key in this.values) {
            previous = callbackfn(previous, this.values[key], i, this.values);
            i++;
        }
        return previous;
    }
}
