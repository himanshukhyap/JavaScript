// Overall, it is recommended to use let and const instead of var because they provide a clearer and more predictable way to declare variables. Use let when you need to reassign the variable, and const when you don't.


// var, let, and const are all keywords used in JavaScript to declare variables.

// var was the only keyword used to declare variables in older versions of JavaScript. It has a function scope, which means that variables declared with var are accessible throughout the entire function in which they are declared.

// Example:


var x = 10;
function exampleFunction1() {
    if (true) {
      var x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
  }
  exampleFunction1()
//   In this example, the variable x is declared twice with var inside the same function. The second declaration overrides the first one, and the final value of x is 20 in both console.log() statements.



// let and const were introduced in newer versions of JavaScript. 
// They have a block scope, which means that variables declared with let or const are only accessible within the block they are declared in (i.e., inside curly braces {}).


let x = 10;
function exampleFunction2() {
    if (true) {
      let x = 20;
      console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
  }
  exampleFunction2()


  
let a = 1;
const b = 2;

a = 3; // This is allowed
b = 4; // This will result in a TypeError: Assignment to constant variable.
