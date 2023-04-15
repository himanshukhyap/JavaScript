// Here is a list of all the Array methods in JavaScript:

// findIndex() - Returns the index of the first element in an array that passes a test.
// flat() - Creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.
// forEach() - Executes a provided function once for each array element.
// from() - Creates a new array from an array-like object.
// includes() - Determines whether an array includes a certain value among its entries.
// indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// join() - Joins all elements of an array into a string.
// keys() - Returns an iterator object that contains the keys for each index in the array.
// lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// reverse() - Reverses the order of the elements in an array.
// shift() - Removes the first element from an array and returns that element.
// slice() - Returns a shallow copy of a portion of an array into a new array object.
// some() - Checks if at least one element in an array passes a test.
// splice() - Adds or removes elements from an array at a specified index.
// toLocaleString() - Returns a string representing the elements of the array, localized according to the browser's locale.
// toString() - Returns a string representing the elements of the array.
// unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// values() - Returns an iterator object that contains the values for each index in the array.
// Note that some of these methods may modify the original array, while others return a new array.








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



// If we want to remove the element at index 2 ('cherry') and add the element 'fig' at that same position, we can use the splice method like this:
const fruits2 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const removedElements = fruits2.splice(2, 1, 'fig');
console.log(fruits2); // Output: ['apple', 'banana', 'fig', 'date', 'elderberry']
console.log(removedElements); // Output: ['cherry']




const newArray = myArray.concat([6, 7, 8]);
console.log(newArray); // Output: [-1, 1, 2, 3, "four", true, 6, 7, 8]



// array.splice(startIndex, deleteCount, item1, item2, ...)
// array.slice(startIndex, endIndex)

const fruits1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];


// If we want to create a new array that contains the elements from index 1 ('banana') to index 3 ('date'), we can use the slice method like this:

const slicedFruits = fruits1.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'cherry', 'date']
console.log(fruits1); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']



console.log(myArray.indexOf("four")); // Output: 4


const filteredArray = myArray.filter((x) => typeof x === "number");
console.log(filteredArray); // Output: [-1, 1, 2, 3]



console.log(...myArray)


// Destructuring an Array
const [first, second, ...rest] = myArray;
console.log(first); // Output: -1
console.log(second); // Output: 1
console.log(rest); // Output: [2, 3, "four", true]





// The reduce() method in JavaScript is used to apply a function to each element in an array 
// and accumulate a single value by iterating through the array. 
// The reduce() method takes two arguments: a callback function and an optional initial value.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator)
    console.log(currentValue)
  return accumulator + currentValue;
            // 1+2
            // 3+3

});

console.log(sum); // Output: 15



const numbers1 = [1, 2, 3, 4, 5];

const sum1 = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator)
    console.log(currentValue)
  return accumulator + currentValue;
}, 0);

console.log(sum1); // Output: 15



const people = [
    { name: 'John', age: 20 },
    { name: 'Sarah', age: 25 },
    { name: 'Mike', age: 30 },
    { name: 'Mary', age: 35 },
  ];
  const result = people.find(person => person.age >= 30);
  console.log(result);  // Output: { name: 'Mike', age: 30 }


// flat() - Creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.
const arr = [1, 2, [3, 4, [5, 6]]];
const flattenedArr = arr.flat(2);
console.log(flattenedArr); // [1, 2, 3, 4, 5, 6]


// findIndex() - Returns the index of the first element in an array that passes a test.
const arrs = [1, 2, 3, 4, 5];
console.log(arrs.findIndex(x=>x/2==2))


const number = [1, 2, 3, 4];
number.forEach(num => console.log(num) ); 


// from() - Creates a new array from an array-like object.
const str = 'hello';
const chars = Array.from(str);
console.log(chars); // Output: ["h", "e", "l", "l", "o"]
console.log(chars.join())
console.log(chars.toString())



// includes() - Determines whether an array includes a certain value among its entries.
const numbers54 = [1, 2, 3, 4];
const hasTwo = numbers54.includes(2);
console.log(hasTwo); // Output: true
