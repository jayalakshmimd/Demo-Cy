/*1. Duplicate elements
let str1 = [1, 2, 3, 4, 2,4,4];
let seenEle = {}; 
let dupEle = []; 

for (let i = 0; i < str1.length; i++) {
    if (seenEle[str1[i]]) 
        dupEle.push(str1[i]);  
    else 
        seenEle[str1[i]] = true;  
}

console.log("Duplicate elements:", dupEle);  
console.log("Seen elements:", seenEle);  
*/

// 2.Occurance of number
let str = [1, 2, 3, 4, 2];
let dupEle = {};  // Object to track occurrences of elements

for (let i = 0; i < str.length; i++) {
    if (dupEle[str1[i]]) {
        dupEle[str1[i]] += 1;  // Increment count if the element is already seen
    } else {
        dupEle[str1[i]] = 1;  // Otherwise, initialize the count to 1
    }
}

console.log("Element occurrences:", dupEle);

//3. Check if String is palindrome or not

let ele="MadaM"
let convString=ele.split("")
let revStr=[]
for(let i=convString.length-1;i>=0;i--)
{
revStr.push(convString[i])
}

if(ele.toUpperCase()===revStr.join("").toUpperCase())
console.log("palindrome")
else
console.log("not palindrome")

//4.Second largest
let str1 = [1, 2, 3, 4, 2];
let largest = str1[0];   // Initial value to represent the largest number
let secondLargest = str1[1];  // Initial value to represent the second largest number

for (let i = 0; i < str1.length; i++) {
    if (str1[i] > largest) {
        secondLargest = largest;  // Update second largest
        largest = str1[i];        // Update largest
    } else if (str1[i] > secondLargest && str1[i] !== largest) {
        secondLargest = str1[i];  // Update second largest if a new candidate is found
    }
}

if (secondLargest !== -Infinity) {
    console.log("Second largest number:", secondLargest);
} else {
    console.log("There is no second largest number.");
}
//5.remove ovels from a string
let str5="jayAlakshmi"
let str2=[]
let str3=str5.split("")
str3.filter((i)=>{
    if (!["a","e","i","o","u"].includes(i.toLowerCase()))
    str2.push(i)
})
console.log(str2.join(""))
//6.Replace string
let stringEle="jayalakshmi"
let repStr=stringEle.split("a").join("b")
console.log(repStr)
//7.Anagram
let str11 = "listen", str22 = "silent";
let strArr1 = str11.toUpperCase().split("");
let strArr2 = str22.toUpperCase().split("");
if (strArr1.length === strArr2.length) {
  let isAnagram = true; 
  for (let i = 0; i < strArr1.length; i++) {
    let index = strArr2.indexOf(strArr1[i]);
    if (index === -1) {
      isAnagram = false;
      break;
    } else {
      strArr2.splice(index, 1);
    }
  }
  if (isAnagram && strArr2.length === 0) {
    console.log("Anagram");
  } else {
    console.log("Not Anagram");
  }
} else {
  console.log("Not Anagram");
}

//8.Write a program to capitalize the first letter of each word in a string.
let stringInput="hi there how are you?"
let convArray=[]
let inputArr=stringInput.split(" ")
inputArr.map((i,index)=>{
i.split("").filter((ele,index)=>index==0?(convArray.push(" "),convArray.push(ele.toUpperCase())):convArray.push(ele))
})
console.log(convArray.join(""))
//ORRRRR
const capitalizeWords = str => 
    str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
  const sentence = "hello world from openai";
  console.log(capitalizeWords(sentence));
  //9.Check if Two Strings are Rotations of Each Other
function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    let concatenatedStr1 = str1 + str1;
  
    return concatenatedStr1.includes(str2);
  }
  let str111 = "abc";
  let str222 = "bca";
  console.log(areRotations(str111, str222) ? "Rotation of Each other" : "Not Rotation");
  //10.Reverse,split,join
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));  // Output: "olleh"
//11.remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5]));  // Output: [1, 2, 3, 4, 5]
//12.flatterning
let arrf = [1, [2, 3], [4, [5, 6,[9]]]];
let final=[]
flatterning(arrf)
function flatterning(arrf)
{
  for(let i=0;i<arrf.length;i++)
{
    if(typeof(arrf[i])==="object")
    flatterning(arrf[i])
    else
    final.push(arrf[i])
}
}
console.log(final)  