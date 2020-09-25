function mixbonacci (pattern, length) {
    var nacchi = {}
    nacchi['fib'] = fib;
    nacchi['pad'] = pad;
    nacchi['jac'] = jac;
    nacchi['pel'] = pel;
    nacchi['tri'] = tri;
    nacchi['tet'] = tet;
    var result = []
    var result_pattern = []
    var nums_and_functions = new Map();
    var iterator = cycle(pattern);
    
    while (length > 0) {
        result_pattern.push(iterator.next().value);
        length--;
    }

    for (let fun of result_pattern) {
        nums_and_functions.set(fun, 0);
    }
    for (let fun of result_pattern) {
        let value = nums_and_functions.get(fun);
        let call = nacchi[fun]
        result.push(call(value));
        nums_and_functions.set(fun, value + 1);
    }


    return result;
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function pad(n) {
    if (n === 0) return 1;
    if (n === 1 || n === 2) return 0;
    return pad(n - 2) + pad(n - 3);
}

function jac(n) {
    return n <= 1 ? n : jac(n - 1) + 2 * jac(n - 2);
}

function pel(n) {
    return n <= 1 ? n : 2 * pel(n - 1) + pel(n - 2);
}

function tri(n) {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;
    return tri(n - 1) + tri(n - 2) + tri(n - 3);
}

function tet(n) {
    if (n === 0 || n === 1 || n === 2) return 0;
    if (n === 3) return 1;
    return tet(n - 1) + tet(n - 2) + tet(n - 3) + tet(n - 4);
}

function* cycle(iterable) {
    let saved = [];
    for(let item of iterable) {
        saved.push(item);
        yield item;
    }
    while (saved) {
        for (let item of saved) {
            yield item;
        }
    }
}

console.log(mixbonacci(['fib'], 0));
console.log(mixbonacci(['fib'], 10));
console.log(mixbonacci(['pad'], 10));
console.log(mixbonacci(['jac'], 10));
console.log(mixbonacci(['pel'], 10));
console.log(mixbonacci(['tri'], 10));
console.log(mixbonacci(['tet'], 10));
console.log(mixbonacci(['fib', 'tet'], 10));
console.log(mixbonacci(['jac', 'jac', 'pel'], 10));