// spread operator
// const array1 = [1, 2, 3];
// const array2 = "SURAJ";

// const newArray = [...array1, ...array2, 89, 69];
// const newArray = [...array2];
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject["25"]);
