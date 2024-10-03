Function.prototype.myCall = function(object, ...args) { //给函数原型加一个myCall方法，所有的实例对象都能访问
    const key = Symbol('key')
    object[key] = this // 指定this，即func
    const res = object[key](...args) // 扩展属性
    delete object[key] // 删除动态添加的方法或属性
    return res
}

const person = {
    name: 'zgj'
}
function func(numA, numB) {
    console.log(this)
    console.log(numA, numB)
    return numA + numB
}
const res = func.myCall(person, 10, 20)
console.log(res)