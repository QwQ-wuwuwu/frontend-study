function debounce(func, wait, immediate = false) {
    let timeId = null
    return function() {
        if(timeId) {
            clearTimeout(timeId)
            timeId = null
        }
        if(immediate) {
            !timeId && func.apply(this, arguments) // 第一次立即执行
            timeId = setTimeout(() => {
                timeId = null
            }, wait)
        } else {
            timeId = setTimeout(() => {
                func.apply(this, arguments)
            }, wait);
        }
    }
}

function debounce(func, wait) {
    let timeId = null
    return function() {
        if(timeId) {
            clearTimeout(timeId)
            timeId = null
        }
        timeId = setTimeout(() => {
            func.apply(this, arguments)
        }, wait);
    }
}