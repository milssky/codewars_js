function factorial(n) {
    if (n === 0) return '1'
    if (!n) return ''
    var i, next, car,
        result = n.toString().split('').reverse().map(Number)

    while (--n) {
        i = car = 0
        while ((next = result[i++]) !== undefined || car) {
            car = (next || 0) * n + car
            result[i - 1] = car % 10
            car = parseInt(car / 10)
        }
    }
    return result.reverse().join('')
}