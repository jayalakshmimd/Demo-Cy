//1.Promises represent the eventual completion or failure of an asynchronous operation and its resulting value. Promises have three states: Pending, Fulfilled, and Rejected.
const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve('Success!');
    } else {
        reject('Failed');
    }
});
//2.A callback function is a function passed as an argument to another function, which is then executed at a later time.
function add(number,addition)
{
    addition(number+2)
}
add(10,function(num){
    console.log(num)
})
//3.A higher-order function is a function that either takes one or more functions as arguments or returns a function.

