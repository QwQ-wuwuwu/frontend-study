// const food = {
//     name: '西兰花炒鸡蛋',
//     eat() {
//         console.log('好好吃')
//     }
// }
// // 参数一：源对象
// // 参数二：用来覆盖源对象中特定的属性或方法
// const nfood = Object.create(food, {
//     eat: {
//         value() {
//             console.log('真的好好吃！')
//         }
//     }
// }) // 将food作为原型，生成一个新的对象
// nfood.eat()
// console.log(nfood.name)

function Father(name) {
    this.name = name
}
Father.prototype.sayHello = function() {
    console.log(`${this.name}：我是sayHello方法`)
}

function Son(name) {
    Father.call(this, name) // 将Father构造函数的this指向改为Son的实例对象
}
const prototype = Object.create(Father.prototype, {
    constructor: {
        value: Son // 覆盖constructor的指向
    }
}) // 基于父类的原型创建一个新的proyotype
//Son.prototype = new Father()
Son.prototype = prototype

const s = new Son('ldb')
s.sayHello()

// for(var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     },0)
// }
// for(let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     },0)
// }
