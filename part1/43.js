// nested destructuring 
const users = [
    { userId: 1, firstName: "Suraj", lastName: "Patil", age: 32 },
    { userId: 2, firstName: "Shreesha", lastName: "Patil", age: 3 },
    { userId: 3, firstName: "Kajal", lastName: "Patil", age: 27 },
]


// const [user1, user2, user3] = users;

// console.log(user1);
// console.log(user2);
// console.log(user3);

const [{ firstName: name1 }, , { age: age3 }] = users;

console.log(name1);
console.log(age3);