function isPrime(num) {
    num = parseInt(num)
    if (num < 2) return false;
    let d = 2;
    while (d * d <= num && num % d != 0) {
        d += 1;
    }

    return d * d > num;
}


console.log(isPrime(1))