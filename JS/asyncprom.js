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
//4.Async and await
// A mock function that simulates fetching data from an API
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received from API!");
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  // An async function that uses await to wait for the fetchData function to complete
  async function getData() {
    console.log("Starting to fetch data...");
    const result = await fetchData();  // Wait for fetchData to resolve
    console.log(result);  // Will log "Data received from API!"
  }
  
  getData();
  
