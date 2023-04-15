// Q: What is hoisting in JavaScript?
// A: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their respective scopes.

console.log(a); // Output: undefined
var a = 10;
// Here, the variable a is declared and assigned a value of 10. However, when we try to log a to the console before its declaration, we get an output of undefined. This is because the variable declaration is hoisted to the top of its scope, but its assignment remains in place. So, the code above is equivalent to:


var b;
console.log(b); // Output: undefined
b = 10;


// What is the difference between synchronous and asynchronous programming in JavaScript?
// when a synchronous operation is executed, the program waits until the operation is completed before proceeding to the next line of code. 
// Asynchronous programming, on the other hand, allows multiple tasks to be executed in parallel, without waiting for each other to complete. In this model, when an asynchronous operation is executed, the program continues to execute the next line of code without waiting for the operation to complete.




// What is a callback function in JavaScript?
// A callback function is a function that is passed as an argument to another function and is executed by that function at a later time.

// Here's an example of a callback function being passed to the setTimeout() function:


setTimeout(function() {
    console.log('Hello, world!');
  }, 1000);

  

//   What is a promise in JavaScript?
// A Promise in JavaScript is an ------object ------------
// representing a value that may not be available yet, but will be resolved in the future. 

// Promises are created using the Promise constructor, which takes a function that defines the asynchronous operation to be performed. The function takes two arguments: a resolve function to be called when the operation completes successfully, and a reject function to be called if the operation fails.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });
  
  myPromise.then((result) => {
    console.log(result); // logs 'Success!' after one second
  }).catch((error) => {
    console.error(error); // catches any errors that occurred during the operation
  });


  fetch('https://api.example.com/data') //--- Promise
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



1 == "1" // true, because the string "1" is converted to the number 1 before comparison
0 == false // true, because the boolean value false is converted to the number 0 before comparison
null == undefined // true, because both values are coerced to false before comparison



1 === "1" // false, because the operands are of different types
0 === false // false, because the operands are of different types
null === undefined // false, because the operands are of different types



// What is a closure in JavaScript and how is it useful?
// In JavaScript, a closure is created when a function is defined inside another function and the inner function has access to the outer function's variables and parameters, even after the outer function has returned. 
function outerFunction() {
    const message = 'Hello';
  
    function innerFunction() {
      console.log(message);
    }
  
    return innerFunction;
  }
  
  const myFunction = outerFunction();
  myFunction(); // logs "Hello"
  