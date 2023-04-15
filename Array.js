// Sure, here is a list of all the JavaScript array methods:

// concat() - joins two or more arrays and returns a new array
// copyWithin() - copies a sequence of array elements to another location in the same array and returns the modified array
// entries() - returns a new array iterator object that contains the key/value pairs for each index in the array
// every() - checks if all elements in an array pass a certain test and returns a Boolean value
// fill() - fills all the elements in an array with a static value and returns the modified array
// filter() - creates a new array with all elements that pass a certain test implemented by a provided function
// find() - returns the value of the first element in an array that satisfies a provided testing function, or undefined if not found
// findIndex() - returns the index of the first element in an array that satisfies a provided testing function, or -1 if not found
// flat() - creates a new array with all sub-array elements concatenated recursively up to the specified depth
// flatMap() - creates a new array with the results of calling a provided function on every element, and then flattening the result into a new array
// forEach() - executes a provided function once for each array element
// includes() - determines whether an array contains a specified element and returns a Boolean value
// indexOf() - returns the first index at which a given element can be found in an array, or -1 if not found
// join() - joins all elements of an array into a string and returns the string
// keys() - returns a new array iterator object that contains the keys for each index in the array
// lastIndexOf() - returns the last index at which a given element can be found in an array, or -1 if not found
// map() - creates a new array with the results of calling a provided function on every element in the calling array
// pop() - removes the last element from an array and returns that element
// push() - adds one or more elements to the end of an array and returns the new length of the array
// reduce() - applies a function against an accumulator and each element in the array to reduce it to a single value
// reduceRight() - applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
// reverse() - reverses the order of the elements in an array and returns the modified array
// shift() - removes the first element from an array and returns that element
// slice() - returns a shallow copy of a portion of an array into a new array object
// some() - checks if at least one element in an array passes a certain test and returns a Boolean value
// sort() - sorts the elements of an array in place and returns the sorted array
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
// toLocaleString() - returns a string representing the elements of an array and their locales
// toString() - returns a string representing the elements of an array
// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
// values() - returns a new array iterator object that contains the values for each index in the array
// Note that some of these methods, such as slice() and concat(), also work with strings and other iterable objects, not just arrays.



var numbers = [1, 2, 3, 4, 5, 6];

// concat()
numbers = [1, 2, 3, 4, 5, 6];
const newArray = numbers.concat([7, 8, 9]);
console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// copyWithin()
numbers = [1, 2, 3, 4, 5, 6];
const copyArray = numbers.copyWithin(0, 3, 5);
console.log(copyArray); // [4, 5, 3, 4, 5, 6]

// entries()
numbers = [1, 2, 3, 4, 5, 6];
const entriesArray = numbers.entries();
for (let entry of entriesArray) {
  console.log(entry); // [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]
}

// every()
numbers = [1, 2, 3, 4, 5, 6];
const isGreaterThanTwo = (number) => number > 2;
const isEveryGreaterThanTwo = numbers.every(isGreaterThanTwo);
console.log(isEveryGreaterThanTwo); // false

// fill()
numbers = [1, 2, 3, 4, 5, 6];
const filledArray = numbers.fill(10,1,3);
console.log(filledArray); 

// filter()
numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); 

// find()
numbers = [1, 2, 3, 4, 5, 6];
const firstGreaterThanThree = numbers.find((number) => number > 3);
console.log(firstGreaterThanThree); // 4

// findIndex()
numbers = [1, 2, 3, 4, 5, 6];
const firstIndexGreaterThanThree = numbers.findIndex((number) => number > 3);
console.log(firstIndexGreaterThanThree); // 3

// flat()
numbers = [1, 2, 3, 4, 5, 6];
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// flatMap()
numbers = [1, 2, 3, 4, 5, 6];
const mappedArray = numbers.flatMap((number) => [number * 2]);
console.log(mappedArray); // [2, 4, 6, 8, 10, 12]

// forEach()
numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((number) => console.log(number * 2)); // 2, 4, 6, 8, 10, 12

// includes()
const includesFive = numbers.includes(5);
console.log(includesFive); // true

// indexOf()
const indexFive = numbers.indexOf(5);
console.log(indexFive); // 4

// join()
const joinedArray = numbers.join("-");
console.log(joinedArray); // "1-2-3-4-5-6"

// keys()
const keysArray = numbers.keys();
for (let key of keysArray) {
  console.log(key); // 0, 1, 2, 3, 4, 5
}

// lastIndexOf()
const lastIndexTwo = numbers.lastIndexOf(2);
console.log(lastIndexTwo); // 1

// map()
const doubledArray = numbers.map((number) => number * 2);
console.log(doubledArray); // [2, 4, 6, 8, 10, 12]

// pop()
const lastElement = numbers.pop();
console.log(lastElement); // 6
console.log(numbers); // [1, 2, 3, 4, 5]

// push()
const newLength = numbers.push(6, 7);
console.log(newLength); // 7
console.log(numbers); 


// reduce()
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 28

// reduceRight()
const reverseSum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(reverseSum); // 28

// reverse()
const reversedArray = numbers.reverse();
console.log(reversedArray); // [7, 6, 5, 4, 3, 2, 1]

// shift()
numbers = [1, 2, 3, 4, 5, 6];
const firstElement = numbers.shift();
console.log(firstElement); // 7
console.log(numbers); 

// slice()
numbers = [1, 2, 3, 4, 5, 6];
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray); 
// some()
const isGreaterThanFive = (number) => number > 5;
const isSomeGreaterThanFive = numbers.some(isGreaterThanFive);
console.log(isSomeGreaterThanFive); // true

// sort()
numbers = [1, 2, 3, 4, 5, 6];
const sortedArray = numbers.sort();
console.log(sortedArray); // [1, 2, 3, 4, 5, 6]

// splice()
numbers = [1, 2, 3, 4, 5, 6];
const splicedArray = numbers.splice(1, 1, "Himanshu");
console.log(splicedArray); // [3]
console.log(numbers); // [1, 2, 10, 4, 5, 6]

// toLocaleString()
numbers = [1, 2, 3, 4, 5, 6];
const localString = numbers.toLocaleString();
console.log(localString); 

// toString()
numbers = [1, 2, 3, 4, 5, 6];
const stringArray = numbers.toString();
console.log(stringArray); 

// unshift()
numbers = [1, 2, 3, 4, 5, 6];
const newLengthUnshift = numbers.unshift(10,20,30,"A","B");
console.log(newLengthUnshift); // 8
console.log(numbers); // [-1, 0, 1, 2, 10, 4, 5, 6]

// values()
numbers = [1, 2, 3, 4, 5, 6];
const valuesArray = numbers.values();
for (let value of valuesArray) {
console.log(value); 
}
