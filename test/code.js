function decodeString(s) {
    const stack = []
    let currentStr = '', number = 0
    for(let i = 0; i < s.length; i++) {
        if(!isNaN(s[i])) {
            number = number * 10 + parseInt(s[i])
        } else if(s[i] === '[') {
            stack.push(number)
            stack.push(currentStr)
            number = 0
            currentStr = ''
        } else if(s[i] === ']') {
            const preStr = stack.pop()
            const times = stack.pop()
            currentStr = preStr + currentStr.repeat(times)
        } else {
            currentStr += s[i]
        }
    }
    return currentStr
}
console.log(decodeString("3[a2[sd]]2[bc]"))