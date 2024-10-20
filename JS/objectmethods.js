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







