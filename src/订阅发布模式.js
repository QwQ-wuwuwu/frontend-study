class EventEmitter {
    constructor() {
        this.cache = {}
    }
    on(name, callback) {
        if(this.cache[name]) {
            this.cache[name].push(callback)
        } else {
            this.cache[name] = [callback]
        }
    }
    off(name, callback) {
        let tasks = this.cache[name]
        if(tasks) {
            const index = tasks.findIndex(f => f === callback) 
            if(index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }
    emit(name, once = false, ...args) {
        if(this.cache[name]) {
            let tasks = this.cache[name]
            for(let fn of tasks) {
                fn(...args)
            }
        }
        if(once) {
            delete this.cache[name]
        }
    }
}

const eventQueue = new EventEmitter()
eventQueue.on('click', (name, age) => {
    console.log('雅思啦你' + name + age)
})
eventQueue.on('click', (name, age) => {
    console.log('hello' + name + age)
})
eventQueue.off('click', (name, age) => {
    console.log('雅思啦你' + name + age)
})
eventQueue.emit('click', 'ldb', 20)
console.log(eventQueue)