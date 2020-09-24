// function dup(s) {
//     function deleteDuplicates(str) {
//         let result = [];
//         let prev = '';
//         for (let ch of str) {
//             if (prev === ch) {
//                 continue;
//             } else {
//                 result.push(ch);
//                 prev = ch;
//             }
//         }
//         return result.join('');
//     }

//     filtered = []
//     for (item of s) {
//         filtered.push(deleteDuplicates(item));
//     }
//     return filtered
//     };



function dup(s) {
    return s.map(w => {
        return w.split('').filter((c, i, arr) => {
        return c !== arr[i - 1];
        }).join('');
    });
    };


console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));