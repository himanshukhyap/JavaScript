// Q: What is hoisting in JavaScript?
// A: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their respective scopes.

// Example:


console.log(a); // Output: undefined
var a = 10;
// Here, the variable a is declared and assigned a value of 10. However, when we try to log a to the console before its declaration, we get an output of undefined. This is because the variable declaration is hoisted to the top of its scope, but its assignment remains in place. So, the code above is equivalent to:


var b;
console.log(b); // Output: undefined
b = 10;