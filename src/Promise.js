const runAsyncTask = (callback) => {
    if(typeof callback === 'function') {
        queueMicrotask(callback)
    }
}
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class myPromise {
    state = PENDING
    result
    #handler = []
    constructor(fn) {
        const resolve = (value) => {
            if(this.state === PENDING) {
                this.state = FULFILLED
                this.result = value
                this.#handler.forEach(({ onFulfilled }) => {
                    onFulfilled(this.result)
                })
            }
        }
        const reject = (value) => {
            if(this.state === PENDING) {
                this.state = REJECTED
                this.result = value
                this.#handler.forEach(({ onRejected }) => {
                    onRejected(this.result)
                })
            }
        }
        try {
            fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : x => x
        onRejected = typeof onRejected === 'function' ? onRejected : x => {throw x}
        const nextPromise = new myPromise((resolve, reject) => {
            if(this.state === FULFILLED) {
                runAsyncTask(() => {
                    const x = onFulfilled(this.result)
                    if(x instanceof myPromise) {
                        x.then(res => resolve(res), err => reject(err)); 
                    } else {
                        resolve(x);
                    }
                })
            }
            if(this.state === REJECTED) {
                runAsyncTask(() => {
                    const x = onRejected(this.result)
                    reject(x)
                })
            }
            if(this.state === PENDING) {
                this.#handler.push({
                    onFulfilled: () => runAsyncTask(() => {
                        const x = onFulfilled(this.result)
                        if(x instanceof myPromise) {
                            x.then(res => resolve(res), err => reject(err))
                        } else {
                            resolve(x)
                        }
                    }),
                    onRejected: () => {
                        runAsyncTask(() => {
                            const x = onRejected(this.result)
                            if(x instanceof myPromise) {
                                x.then(res => resolve(res), err => reject(err))
                            } else {
                                reject(x)
                            }
                        })
                    }
                })
            }
        })
        return nextPromise
    }
    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
    finally(onFinally) {
        return this.then(onFinally, onFinally)
    }
    static resolve(value) {
        if(value instanceof myPromise) {
            return value
        }
        return new myPromise(resolve => resolve(value))
    }
    static reject(value) {
        return new myPromise((undefined, reject) => {
            reject(value)
        })
    }
    static race(promises) {
        return new myPromise((resolve, reject) => {
            if(!Array.isArray(promises)) {
                return new TypeError('类型错误')
            }
            promises.forEach(p => {
                myPromise.resolve(p).then(
                res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            })
        })
    }
    static all(promises) {
        return new myPromise((resolve, reject) => {
            if(!Array.isArray(promises)) {
                return new TypeError('类型错误')
            }
            if(promises.length == 0) {
                resolve(promises)
            }
            let result = []
            let count = 0
            promises.map((p, index) => {
                myPromise.resolve(p).then(res => {
                    result[index] = res
                    count++
                    if(count === promises.length) {
                        resolve(result)
                        return
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }
}

const p1 = myPromise.resolve(1)
const p2 = 10
const p3 = myPromise.resolve(20)
myPromise.all([p1, p2, p3]).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})

// myPromise.reject(11).then(undefined, err => {
//     console.log(err)
// })

// console.log(1)
// const p = new myPromise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         resolve(3)
//     }, 1000);
// })
// p.then(res => {
//     console.log(res)
//     return new myPromise(resolve => resolve(10))
// }, err => {
//     console.log(err)
// }).then(res => {
//     console.log(res)
// })
// console.log(4)


// console.log(1)
// const p = new Promise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         resolve(3)
//     }, 1000)
// })
// p.then(res => {
//     console.log(res)
//     return new Promise(resolve => resolve(10))
// }, err => {
//     console.log(err)
// }).then(res => {
//     console.log(res)
// })
// console.log(4)