// 只针对对象
function shallowCopy(obj) {
    if(typeof obj !== 'object') return 

    let newobj = obj instanceof Array ? [] : {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) { // 仅仅是obj的自有属性，而非原型链上的属性
            newobj[key] = obj[key]
        } 
    }
    return newobj
}

const person = {
    name: 'zgj',
    address: {
        number: '1234',
        people: {
            name: 'ldb',
            age: 20
        }
    }
}
const arr = [1,[2,[3,4],5],6]
const res = shallowCopy(person)
console.log(res)