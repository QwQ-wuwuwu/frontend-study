async function sleep(wait) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('wakeup...')
        }, wait);
    })
}

const now = new Date()
sleep(1000).then((res) => {
    console.log(res)
    const cur = new Date()
    console.log(cur - now)
})