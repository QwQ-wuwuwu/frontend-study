function myInstanceof(obj, fn) {
    let proto = obj.__proto__
    let prototype = fn.prototype
    while (true) {
        if(proto == prototype) return true
        if(proto == null) return false
        proto = proto.__proto__
    }
}

const obj = {
    name: 'zgj'
}

console.log(myInstanceof(obj, Array))