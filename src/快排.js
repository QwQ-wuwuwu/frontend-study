function quickSort(arr) {
    if(arr.length <= 1) {
        return arr
    }
    let tempIndex = Math.floor(arr.length / 2)
    let temp = arr[tempIndex]
    let left = []
    let right = []
    for(let i = 0; i < arr.length; i++) {
        if(i === tempIndex) continue
        if(arr[i] < temp) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(temp, quickSort(right))
}
console.log(quickSort([3,6,4,1,9,5,0]))