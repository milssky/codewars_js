const squares = n => {
    const nums = [];
    for (let i = 1; i <= Number(n); i++) {
        nums.push(i * i);
    }
    return nums 
}

const range = (n, start, step) => {
    const nums = [];
    for (let i = Number(start); i <= Number(n) * Number(step) + Number(step); i += Number(step)) {
        nums.push(i);
    }
    return nums 
}

const random = (n, min, max) => {
    nums = []
    for (let i = 0; i < n; i++) {
        let rnd = min + Math.random() * (max + 1 - min);
        nums.push(Math.floor(rnd));
    }
    return nums
}

const primes = n => {
    nums = []
    nextPrime:
    for (let i = 2; i <= n * n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }

        nums.push(i)
    }
    return nums.slice(0, n)
}


console.log(squares(5));
console.log(range(6, 3, 2));
console.log(random(4, 5, 10));
console.log(primes(6))