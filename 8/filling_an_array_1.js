const arr = num => {
    nums = []
    for (let i = 0; i < Number(num); i++) {
        nums.push(i)
    }
    return nums
}

console.log(arr(5))