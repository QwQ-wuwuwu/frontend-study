function Animal(name) {
    this.name = name
}
Animal.prototype.getName = function() {
    return this.name
}

function Cat(name, age) {
    Animal.call(this, name)
    this.age = age
}
Cat.prototype = new Animal() //Cat的原型指向Animal的一个实例

const cat = new Cat('ldb', 22)
console.log(cat.age)