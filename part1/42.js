// objects inside array 
// very useful in real world applications

const users = [
    { userId: 1, firstName: "Suraj", lastName: "Patil", age: 32 },
    { userId: 2, firstName: "Shreesha", lastName: "Patil", age: 3 },
    { userId: 3, firstName: "Kajal", lastName: "Patil", age: 27 },
]

for (let user of users) {
    console.log(user.lastName);
}