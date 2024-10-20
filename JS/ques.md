### 1.What is NaN property in JavaScript?
NaN is the result of an operation that was supposed to return a number, but couldn't because of an error or undefined/empty value.
EX:-
console.log(0/0); // This will return NaN
console.log(parseInt("hello")); // This will return NaN
### 2.What is the difference between null and undefined in JavaScript?
Undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null.
### 3.What is JSON and its common operations?
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
Common Operations on JSON
    A)Parsing JSON: Converting a JSON string into a JavaScript object. 
    const jsonString = '{"name": "John Doe", "age": 30}';
    const jsonObject = JSON.parse(jsonString);
    console.log(jsonObject.name); // Output: John Doe
    B)Stringifying Objects: Converting a JavaScript object into a JSON string.
    const user = {
    name: "Jane Doe",
    age: 25
    };
    const jsonString = JSON.stringify(user);
    console.log(jsonString); // Output: {"name":"Jane Doe","age":25}
    C)Accessing Data: Accessing values in a JSON object.
    const jsonObject = {
    name: "John Doe",
    age: 30,
    address: {
        city: "Anytown"
    }
    };
    console.log(jsonObject.address.city); // Output: Anytown
    D)Modifying Data: Updating values within a JSON object.
    jsonObject.age = 31; // Update age
    jsonObject.address.city = "New City"; // Update city
    E)Adding Data: Adding new key-value pairs to a JSON object.
    jsonObject.isStudent = true; // Add new key-value pair
    F)Deleting Data: Removing key-value pairs from a JSON object.
    delete jsonObject.age; // Remove age property
    G)Iterating Over JSON: Looping through keys in a JSON object.
    for (const key in jsonObject) {
    console.log(`${key}: ${jsonObject[key]}`);
    }
### 4.What is the difference between == and === operators?
    A)==:-it converts the operands to the same type before making the comparison. As a result, two values can be considered equal even if they are of different types.
    console.log(5 == '5'); // true, because '5' is converted to the number 5
    console.log(null == undefined); // true, both are considered equal
    console.log(0 == false); // true, because false is coerced to 0
    B)===:-It checks both the value and the type of the operands. 
    console.log(5 === '5'); // false, because the types (number vs. string) are different
    console.log(null === undefined); // false, because the types (object vs. undefined) are different
    console.log(0 === false); // false, because the types (number vs. boolean) are different

#### 5.Generator
In JavaScript, generators are special functions that allow you to pause and resume execution. They are defined using the function* syntax and return an iterator called Generator.
function* simpleGenerator() {
  yield 'a';
  yield 'b';
  yield 'c';
}

const gen = simpleGenerator();

console.log(gen.next().value); // 'a'
console.log(gen.next().value); // 'b'
console.log(gen.next().value); // 'c'
console.log(gen.next().done);  // true (indicates generator is complete)
#### 6.Prototype
Every object in JavaScript has an internal property called [[Prototype]] (often referred to as just __proto__ in some browsers). This prototype object serves as a template from which the object can inherit properties and methods. 


