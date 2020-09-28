// function solution(str) {
//     splited_string = []
//     temp_str = str;
//     while (temp_str) {
//         splited_string.push(temp_str.slice(0, 2));
//         temp_str = temp_str.slice(2);
//     }

//     result = [];

//     for (let item of splited_string) {
//         if (item.length % 2 != 0) {
//             var text = item.concat("_");
//             result.push(text);
//         } else {
//             result.push(item);
//         }
//     }

//     return result;
// }


function solution(str) {
    if (str.length % 2 != 0) {
        str = str.concat("_");
    }
    splited_string = [];
    temp_str = str;
    while (temp_str) {
        splited_string.push(temp_str.slice(0, 2));
        temp_str = temp_str.slice(2);
    }
    return splited_string;

}



console.log(solution("abcdefg"));