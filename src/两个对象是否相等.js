
function deepEqual(obj1, obj2) {
    if(obj1 === obj2) {
        return true
    }
    if(!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false
    }
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if(keys1.length !== keys2.length) {
        return false
    }
    for(let key of keys1) {
        if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false
        }
        
    }
    return true
}

const obj1 = {
    a: {
        d: {
            c: 'name'
        }
    }
}
const obj2 = {
    a: {
        b: {
            c: 'name'
        }
    }
}
console.log(deepEqual(obj1, obj2))