function solve(str, idx) {
    if (str[idx] !== '(') return -1;
    let count = 1;

    for (let i = idx + 1; i < str.length; i++) {
        if (str[i] === '(') count++;
        if (str[i] === ')') count--;
        if (count === 0) return i;
    }
}

