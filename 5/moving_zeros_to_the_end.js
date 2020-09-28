var moveZeros = function (arr) {
    zero = []
    other_symbols = []

    for (let item of arr) {
        if (item === 0) zero.push(item);
        else other_symbols.push(item);
    }

    return other_symbols.concat(zero);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));