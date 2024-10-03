function createCounter(n) {
    let cur = n - 1
    return function() {
        cur += 1
        return cur
    }
}
const count = createCounter(-2)
console.log(count())
console.log(count())
console.log(count())