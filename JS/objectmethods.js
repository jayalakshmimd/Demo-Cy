//1.Object.keys()
let obj = { name: 'Alice', age: 25 };
let keys = Object.keys(obj);  // ["name", "age"]
//2.Object.values()
let values = Object.values(obj);  // ["Alice", 25]
//3.Object.entries()
let entries = Object.entries(obj);  // [["name", "Alice"], ["age", 25]]
//4.Object.assign()
let merged = Object.assign({}, obj1, obj2);
//5.for...in
for (let key in obj) {
  console.log(key, obj[key]);  // Output: name Alice, age 25
}
//6.obj.hasOwnProperty()
console.log(obj.hasOwnProperty('name'));  // true
console.log(obj.hasOwnProperty('age'));   // false
//7.delete
delete obj.age; 
//8.Object.fromEntries()
let entries1 = [['name', 'Alice'], ['age', 25]];
let obj1 = Object.fromEntries(entries1);  // { name: 'Alice', age: 25 }
//9.Deep Clone of an object
//If you're looking for a simpler way to deep clone an object, you can use JSON methods. This method is straightforward but has some limitations (e.g., it won't handle functions, undefined values, or circular references).
function simpleDeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Example usage:
const original = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "traveling"],
  address: {
      city: "Wonderland",
      zip: 12345
  }
};

const cloned = simpleDeepClone(original);
cloned.name = "Bob";
cloned.hobbies[0] = "writing";
cloned.address.city = "New Wonderland";

console.log(original); // Original object remains unchanged
console.log(cloned);   // Cloned object has modified values

//EXAMPLE 2:-other way its to make use of structured clone method.
const cloned = structuredClone(original);

//10.Object.entries()-This is useful for iterating over objects or converting them into an array format for easier manipulation.
let emp = {};
emp.name= 'Jack';
emp.age= '27'
for (let [key, value] of Object.entries(emp)) {
    console.log(key + '- ' + value);
}
//11.for...in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
//12.for...Each
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});




