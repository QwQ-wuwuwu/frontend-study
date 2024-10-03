function myTypeOf(value) {
    const res = Object.prototype.toString.call(value).split(' ')[1]
    const result = res.substring(0, res.length - 1).toLowerCase()
    console.log(result)
    return result
}
myTypeOf('nihaoa')
myTypeOf([])
myTypeOf({})
myTypeOf(null)