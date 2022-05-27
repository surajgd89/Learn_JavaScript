//functions 

// function singHappyBirthday() {
//     console.log("Happy Birthday to you");
// }

// singHappyBirthday();


// function sum(a, b) {
//     return a + b;
// }

// let total = sum(2, 3);

// console.log(total);

// function evenNum(num) {
//     if (num % 2 === 0) {
//         console.log("IsEven");
//     } else {
//         console.log("Isodd");
//     }
// }

// evenNum(13);

let array = [1, 3, 5, 7, 9];
let number = 10;

function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }
    return -1;
}

console.log(findTarget(array, number));