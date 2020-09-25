function isValidIP(str) {
    let data = str.split('.');
    if (data.length !== 4) return false;
    for (var i = 0; i < data.length; i++) {
        if (!(data[i] >= 0 && data[i] <= 255)) return false;
        if (!data[i][0]) return false
    }
    return true
}

//best solution
function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}


console.log(isValidIP('1.2.3.4'));