Function.prototype.myAplly = function (object, args) {
    const key = Symbol('key')
    object[key] = this
    const res = object[key](...args)
    delete object[key]
    return res
}

const person = {
    name: 'zgj'
}
function func(numA, numB) {
    //console.log(this)
    console.log(numA, numB)
    return numA + numB
}
const res = func.myAplly(person, [1, 3])
console.log(res)