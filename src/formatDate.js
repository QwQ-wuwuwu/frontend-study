function formatDate(date, format) {
    const addZero = (num) => num < 10 ? `0${num}` : `${num}`
    const replacements = {
        'yyyy': date.getFullYear(),
        'MM': addZero(date.getMonth() + 1), 
        'dd': addZero(date.getDate()),
        'HH': addZero(date.getHours()),
        'mm': addZero(date.getMinutes()),
        'ss': addZero(date.getSeconds())
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => replacements[match])
}
const datex = new Date('1995-12-17T03:24:00')
console.log(formatDate(datex, 'yyyy-MM-dd HH:mm:ss'))