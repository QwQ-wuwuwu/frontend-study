// ES5
function unique(arr) {
    let res = []
    for(let x of arr) {
        if(res.indexOf(x) === -1) {
            res.push(x)
        }
    }
    return res
}

// ES6
function unique6(arr) {
    const res = [...new Set(arr)]
    return res
}
console.log(unique6([1,2,2,2,3,4,5]))