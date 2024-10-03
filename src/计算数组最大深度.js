const array = [1,[2,3],4,[5,[6,7,[8,0]]],9]

function panduan(array) {
    if(!Array.isArray(array)) {
        return 1
    }
    let maxdeep = 1
    for(let a of array) {
        if(Array.isArray(a)) {
            maxdeep = Math.max(maxdeep, 1 + panduan(a))
        }
    }
    return maxdeep
}

console.log(panduan(array))