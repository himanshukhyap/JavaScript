// Here are some commonly used JavaScript object methods:

// Object.keys() - Returns an array of a given object's own property names.

// Object.values() - Returns an array of a given object's own enumerable property values.

// Object.entries() - Returns an array of a given object's own enumerable property [key, value] pairs.

// Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object.

// Object.freeze() - Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.

// Object.seal() - Seals an object, preventing new properties from being added to it and existing properties from being deleted, while still allowing existing properties to be modified.

// Object.create() - Creates a new object with the specified prototype object and properties.

// Object.hasOwnProperty() - Returns a Boolean indicating whether the object has the specified property as its own property.

// Object.is() - Determines whether two values are the same value.

// Object.toString() - Returns a string representing the object.




// Define an object with some properties
const myObj = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  myObj
  delete myObj.age
  myObj
  myObj.age = 50
  myObj
  myObj.age = 30
  myObj


  // Object.keys() - Returns an array of object's own property names
  const objKeys = Object.keys(myObj);
  console.log(objKeys); // Output: ["name", "age", "city"]
  

  // Object.values() - Returns an array of object's own enumerable property values
  const objValues = Object.values(myObj);
  console.log(objValues); // Output: ["John Doe", 30, "New York"]
  

  // Object.entries() - Returns an array of object's own enumerable property [key, value] pairs
  const objEntries = Object.entries(myObj);
  console.log(objEntries); // Output: [["name", "John Doe"], ["age", 30], ["city", "New York"]]
  

  // Object.assign() - Copies the values of all enumerable properties from one or more source objects to a target object
  const newObj = Object.assign({}, myObj, { occupation: "Software Engineer", Age:28 },{ job: "Data Engineer", Age:30 });
  console.log(newObj); 
  

  // Object.freeze() - Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted
//   Object.freeze(myObj);
// crud opeartion stop
  myObj.name = "Kashyap";
  delete myObj.age
  myObj.lastname="kashyap"
  console.log(myObj);
  

  // Object.seal() - Seals an object, preventing new properties from being added to it and existing properties from being deleted, while still allowing existing properties to be modified
//    add and delete not perform but modify can work 
  Object.seal(myObj);
  myObj.occupation = "Teacher";
  delete myObj.city;
  myObj.lastname="Himanshu Kashyap"
  console.log(myObj); 
  

  // Object.create() - Creates a new object with the specified prototype object and properties
  myObj
  const newObj2 = Object.create(myObj, {
    hobby: {
      value: "Reading"
    }
  });
  console.log(newObj2)
  console.log(Object.keys(newObj2))
  console.log(newObj2.name); 
  console.log(newObj2.hobby);
  console.log(newObj2.city);  
  

  // Object.hasOwnProperty() - Returns a Boolean indicating whether the object has the specified property as its own property
  console.log(myObj.hasOwnProperty("name")); // Output: true
  console.log(myObj.hasOwnProperty("occupation")); // Output: false
  

  // Object.is() - Determines whether two values are the same value
  console.log(Object.is(10, 10)); // Output: true
  console.log(Object.is([], [])); // Output: false - Arrays are reference types, so two empty arrays are not the same value
  


  // Object.toString() - Returns a string representing the object
  console.log(myObj.toString()); // Output: "[object Object]"
  