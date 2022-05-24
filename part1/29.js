// how to clone array 

// how to concatenate two arrays

let array1 = ["item01", "item02", "item03"];
// let array2 = ["item01", "item02"];
// console.log(array1);
// let array2 = array1.slice(0).concat(["item04", "item05"]);
// console.log(array2);
// let array2 = [].concat(array1, ["item04", "item05"]);
// console.log(array2);

// new way
// spread operator
//let oneMoreArray = ["item04", "item05"]
let array2 = ["item04", "item05", "item06"];

let newArray = [...array1, ...array2];
console.log(newArray[newArray.length - 1]);

// array1.push("item06");

// console.log(array2);

// console.log(array1 === array2);
// console.log(array1)
// console.log(array2)
