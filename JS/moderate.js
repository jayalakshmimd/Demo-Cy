//Closure-A closure is a function that retains access to its lexical scope even after the outer function has finished executing.
function outer() {
    let outerVar = 'I am outer';
    return function inner() {
        console.log(outerVar);  // inner can access outerVar
    };
}

const closureExample = outer();
closureExample();  // Output: "I am outer"
