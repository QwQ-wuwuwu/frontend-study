function deepCopy(obj, hash = new WeakMap()) {
    if(typeof obj !== 'object') return obj
    if(hash.has(obj)) { // 处理循环引用
        return hash.get(obj)
    }
    const newobj = obj instanceof Array ? [] : {}
    hash.set(obj, newobj)
    for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
            newobj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key], hash) : obj[key]
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
console.log(deepCopy(arr))
const res = deepCopy(person)
console.log(res)