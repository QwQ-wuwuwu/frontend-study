function Animal() {
    this.colors = ['red', 'green']
}
Animal.prototype.getColors = function() {
    return this.colors
}
function Dog() {}
Dog.prototype = new Animal() //将Dog的原型指向Animal的一个实例

const dog1 = new Dog()
dog1.colors.push('pink')
console.log(dog1.getColors())

const dog2 = new Dog()
console.log(dog2.getColors())


// 原型链继承存在的问题：
// 问题1：原型中包含的引用类型属性将被所有实例共享；
// 问题2：子类在实例化的时候不能给父类构造函数传参；