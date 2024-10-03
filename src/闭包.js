function makeCounter() {
    let count = 0
    function changeCount(value) {
        return count += value
    }
    return changeCount
}

const count1 = makeCounter()
const count2 = makeCounter()

console.log(count1(10))
console.log(count2(100))