
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";
// console.log(cars)


const cars_new = new Array("Saab", "Volvo", "BMW");
console.log(cars_new)   

cars[0] = "Opel";
console.log(cars)


console.log(typeof(cars))
console.log(Array.isArray(cars))
console.log(cars.length)
console.log(cars.sort())


const myArray = [1, 2, 3, "four", true];

myArray.push("five");
console.log(myArray); // Output: [1, 2, 3, "four", true, "five"]
myArray.pop();
console.log(myArray); // Output: [1, 2, 3, "four", true]


myArray.unshift("zero", -1);
console.log(myArray); // Output: ["zero", -1, 1, 2, 3, "four", true]
myArray.shift();
console.log(myArray); // Output: [-1, 1, 2, 3, "four", true]



const newArray = myArray.concat([6, 7, 8]);
console.log(newArray); // Output: [-1, 1, 2, 3, "four", true, 6, 7, 8]



// array.splice(startIndex, deleteCount, item1, item2, ...)
// array.slice(startIndex, endIndex)

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits)

console.log(fruits.splice(1,3))