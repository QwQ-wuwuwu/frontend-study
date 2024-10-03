function objectFactory(constructor, ...args) {
    const newObj = {}
    newObj.__proto__ = constructor.prototype
    constructor.call(newObj, ...args)
    return newObj
}

function Person(name) {
    this.name = name
}
Person.prototype.getName = function () { //原型上添加一个getName方法，以便他的实例都可以使用（继承）
    console.log(this.name)
}

const p = objectFactory(Person, 'zgj')
p.getName()