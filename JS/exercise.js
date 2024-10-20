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
let missingVal=[]
function findMissingNumber(arr) {
    let prev=arr[0]
for(let i=1;i<arr.length;i++){
  
  if(!arr.includes(arr[i]+1)&&arr[i]!=arr[arr.length-1])
  missingVal.push(arr[i]+1)
}
return missingVal 
}

console.log(findMissingNumber([1, 2, 3, 5,8,10]));  // Output: 4,6,9
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


