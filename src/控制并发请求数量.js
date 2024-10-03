
function ctrlRequest(urls, k) {
    return new Promise(resolve => {
        const n = urls.length
        if(n === 0) {
            resolve([])
            return 
        }
        const results = new Array(n).fill()

        async function request(cur) {
            if(results[cur]) { // 优化请求数量
                cur++
                return 
            }
            if(cur === n) {
                resolve(results)
                return
            }
            try {
                results[cur] = 'pending'
                const ans = (await fetch(urls[cur])).json()
                results[cur] = ans
            } catch(err) {
                results[cur] = err
            } finally {
                cur += 1
                request(cur)
            }
        }

        for(let i = 0; i < Math.min(k, n); i++) {
            request(i)
        }
    })
}

const urls = [];
for (let i = 1; i <= 20; i++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
}
ctrlRequest(urls, 3).then(res => {
    console.log(res);
})