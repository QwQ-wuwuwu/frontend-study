var name= 'Jay'
function Person(name) {
    this.name = name
    console.log(this.name)
}
var a = Person('Tom') //调用函数没有返回值
console.log(name)
console.log(a)
var b = new Person('Michael')
console.log(b)