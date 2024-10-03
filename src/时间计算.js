
function getDayforWeek(str) {
    const date = new Date(str)
    if(isNaN(date)) {
        throw new Error('格式转化失败')
    }
    const startOfYear = new Date(date.getFullYear(), 0, 1) // 该年的一月一号
    const daysOfYear = Math.floor((date - startOfYear) / (1000 * 60 * 60 * 24)) + 1
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekOfDay = week[date.getDay()]
    return `${daysOfYear}(${weekOfDay})`
}

console.log(getDayforWeek('2018-10-01'))