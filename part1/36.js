// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

const person = { name: "Suraj", email: "suraj.gd89@gmail.com", age: 32, hobbies: ["cricket", "football", "reading"] }

//add key values in objects
person.gender = "male";
console.log(person);
person.hobbies.push("abc").push("abc")
console.log(person.hobbies);




//two types of accessing key values in objects
// console.log(person.name);
// console.log(person["name"]);