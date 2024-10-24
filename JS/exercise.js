//1.remove duplicates
let arrf = "jayalakshmi"
let input=arrf.split("")
let final=[]
for(let i=0;i<input.length;i++)
{
    if(!final.includes(input[i]))
    final.push(input[i])
}
console.log(final.join(""))
// 2.Check for Palindrome
function isPalindrome(str) {
    let inputStr=str.split(",").join(" ").split(" ").join("").toUpperCase()
    let revString=inputStr.split("").reverse().join("").toUpperCase()
    console.log(inputStr,revString)
    if(inputStr===revString)
    return true
    else return false
    // your code here
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
//3.Find missing number in an array
let inputData = [1, 2, 3, 5, 8, 10, 16];
let missingData = [];
let value = inputData[0];
for (let i = 1; i < inputData.length; i++) {
  while (value + 1 < inputData[i]) {
    missingData.push(value);
     value++;
  }
  value = inputData[i]; 
}

console.log(missingData); //[4,  6,  7,  9, 11,12, 13, 14, 15]  // Output: 4,6,9
//4.Soring array by its length ["apple", "banana", "kiwi", "cherry"]
let allEle = {};
function sortByLength(arr)
{for (let i = 0; i < arr.length; i++) {
    const length = arr[i].length; 
    if (!allEle.hasOwnProperty(length)) {
        allEle[length] = [];
    }
    allEle[length].push(arr[i]);
}
console.log("All Elements....",allEle)
//{ '4': [ 'kiwi' ], '5': [ 'apple' ], '6': [ 'banana', 'cherry' ] }
return allEle;
}

let finalRes=sortByLength(["apple", "banana", "kiwi", "cherry"]) 
console.log(Object.values(finalRes).flat())//[ 'kiwi', 'apple', 'banana', 'cherry' ]
//5.Find if number Armstrong number or not
//An Armstrong number (or narcissistic number) is a number that is equal to the sum of its own digits raised to the power of the number of digits.
function isArmstrongNumber(num) {
    // Convert number to string to easily access digits
    const strNum = num.toString();
    const numDigits = strNum.length;

    // Calculate the sum of each digit raised to the power of numDigits
    const sum = strNum.split('').reduce((acc, digit) => {
        return acc + Math.pow(Number(digit), numDigits);
    }, 0);

    // Check if the sum is equal to the original number
    return sum === num;
}

// Example usage:
const numberToCheck = 153; // Change this number to test
if (isArmstrongNumber(numberToCheck)) {
    console.log(`${numberToCheck} is an Armstrong number.`);
} else {
    console.log(`${numberToCheck} is not an Armstrong number.`);
}
//6.Group Anagrams:- Create a function that groups an array of strings into an array of arrays of anagrams.
function groupAnagrams(strings) {
    const anagramMap = {};

    strings.forEach(str => {
        // Sort the string and use it as a key
        const sortedStr = str.split('').sort().join('');
        
        // Group anagrams together
        if (!anagramMap[sortedStr]) {
            anagramMap[sortedStr] = [];
        }
        anagramMap[sortedStr].push(str);
    });

    // Return the grouped anagrams as an array of arrays
    return Object.values(anagramMap);
}

// Example usage:
const finalInput = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(finalInput);
console.log(groupedAnagrams);
//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]


