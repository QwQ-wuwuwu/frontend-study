Function.prototype.myBind = function (object, ...args) {
    return (...reargs) => {
        const res = this.call(object, ...args, ...reargs) // 将func指向object，作为object的方法
        return res
    }
}

const person = {
    name: 'zgj'
}
function func(numA, numB, numC, numD) {
    //console.log(this)
    console.log(numA, numB, numC, numD)
    return numA + numB + numC + numD
}
const bindFunc = func.myBind(person, 20, 100)
const res = bindFunc(10, 30)
console.log(res)
