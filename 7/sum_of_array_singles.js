// function repeats(arr){
//     let temp = new Map();
//     for (let item of arr) {
//         if (temp.has(item)) {
//             temp.set(item, temp.get(item) + 1);
//         } else {
//             temp.set(item, 1);
//         };
//     };
//     let sum = 0
//     for (let item of temp) {
//         if (item[1] > 1) continue;
//         else sum += item[0];
//     }
//     return sum;
// };

function repeats(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).reduce((a, b) => a + b, 0);
}


console.log(repeats([4,5,7,5,4,8]))