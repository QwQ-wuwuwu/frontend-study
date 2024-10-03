function test(number) {
    let nums = []
    let t = number
    while(t > 0) {
        const x = t % 10
        nums.push(x)
        t = Math.floor(t / 10)
    }
    let ans = []
    for(let i = 0; i < nums.length; i++) {
        if(i % 3 == 0 && i !== 0) {
            ans.push(',')
            ans.push(nums[i])
        } else {
            ans.push(nums[i])
        }
    }
    return ans.reverse().join('')
}
console.log(test(1234))

