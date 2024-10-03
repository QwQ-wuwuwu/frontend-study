function luanxu(arr) {
    const n = arr.length
    const random = Math.floor(Math.random() * n) // 0 ~ n之间的随机数
    for(let i = 0; i < arr.length; i++) {
        [arr[i], arr[random]] = [arr[random], arr[i]]
    }
    console.log(arr)
}
luanxu([1,2,3,4,5,6])