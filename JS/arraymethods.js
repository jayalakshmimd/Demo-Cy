//1.push
let arr = [1, 2, 3];
arr.push(4);//arr becomes [1, 2, 3, 4]
//2.pop
let removedElement = arr.pop();  // arr becomes [1, 2], removedElement = 3
//3.unshift: Adds one or more elements to the beginning of an array.
arr.unshift(1);  // arr becomes [1, 2, 3]
//4.search methods
let index = arr.indexOf(3);  // 2
let found = arr.find(x => x > 2); //3
let index1 = arr.findIndex(x => x > 2);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//5.Manipulation methods
//A.splice:-Adds or removes items from an array at a specific index.
let arrsp = [1, 2, 3, 4];
arrsp.splice(2, 1, 5);  // arr becomes [1, 2, 5, 4]
//B.slice:-Returns a shallow copy of a portion of an array into a new array object.
let arrsl = [1, 2, 3, 4];
let newArr = arrsl.slice(1, 3);  // [2, 3]--->index,length
//C.sort:-Sorts the elements of an array in place and returns the sorted array.
//EX1:-
let arrst = [4, 2, 3, 1];
arrst.sort();  // arr becomes [1, 2, 3, 4]
EX2:-
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["apple", "banana", "kiwi", "cherry"]));  
// Output: ["kiwi", "apple", "banana", "cherry"]

//D.Reverse:-Reverses the order of the elements in an array in place.
let arrrev = [1, 2, 3, 4];
arrrev.reverse();  // arr becomes [4, 3, 2, 1]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//6. Transforming Methods
//A.concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);  // [1, 2, 3, 4]
//B.join:- Joins all elements of an array into a string
let arrj = ['Hello', 'world'];
let joined = arrj.join(' ');  // "Hello world"
//C.flat:- Flattens nested arrays into a single array.
let arrf = [1, [2, 3], [4, [5, 6]]];
let flatArr = arrf.flat(2);  // [1, 2, 3, 4, 5, 6](2 level nesting)
//D.includes:-Checks if an array contains a specific element.
let arri = [1, 2, 3];
arri.includes(2);  // true
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Iteration Methods
//1.forEach():-Executes a function once for each element in an array.
let arrfe = [1, 2, 3];
arrfe.forEach((el) => console.log(el));  // Output: 1, 2, 3,return undefined
//2.map():-Creates a new array with the results of calling a provided function on every element.
let arrm = [1, 2, 3];
let squared = arrm.map(x => x * x);  // [1, 4, 9],returns transformed element
//3.filter()
let evenNumbers = arr.filter(x => x % 2 === 0);  // [2, 4]
//4.reduce()
let sum = arr.reduce((acc, cur) => acc + cur, 0);  // 10
//5.some():-Tests whether at least one element in the array passes the test implemented by the provided function.
let hasEven = arr.some(x => x % 2 === 0);  // true
//6.every():-Tests whether all elements in the array pass the test implemented by the provided function.
let allEven = arr.every(x => x % 2 === 0);  // true








