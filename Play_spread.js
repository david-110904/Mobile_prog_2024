// ... Spread Operator and Rest Parameters
// ? What is spread operator?
// The spread operator is a new addition to the set of operators in JavaScript ES6. It 
// takes in an iterable (eg an array) and expands it into individual elements. 
// The spread operator is used to copy an array, merge arrays, add elements to an array, and add properties to an object.

// Example 1
// Copying an array
const arri = [1, 2, 3];
const arr2 = [... arr1];

console. log(arr2); // [1, 2, 3]

// Example 2
// Merging arrays
const ex2_arrl = [1, 2, 3];
const ex2_arr2 = [4, 5, 6]
const ex2_arr3 = [... ex2_arr1, ... ex2_arr2]


console. log(ex2_arr3) // [1, 2, 3, 4, 5, 6]

// example 3
// adding elements to an array
const ex3_arr1 = [1, 2, 3];
const ex3_arr2 = [...ex3_arr1, 4 , 5 , 6]

console.log(ex3_arr2)// [1, 2, 3, 4, 5, 6]

// the spread operator is not only used for array, it can also be used for objects.
// example 4
// copying an object

const obj1 = {name: "john", age: 25};
const obj2 = {...obj1};

console.log(obj2) // {name: "john", age: 25}

// example 5
// merging objects
const obj3 = {name: "john", age: 25};
const obj4 = {city: "New York", country: "USA"};

const obj5 = {...obj3, ...obj4};

console.log(obj7); // {name: 'john', age: 25, city: 'New York', country: 'USA'}

// example 6
// aadding properties to object
const obj6 = {name: 'john', age: 25};
const obj7 = {...obj6, city: 'New York', country: 'USA'};

console.log(obj7); // {name: 'John', age 25, city: New York, country: 'USA'}

//example 7
// overriding properties
const obj8 = {name: 'john', age: 25};
const obj9 = { ... obj8, age: 30};

// ! Rest parameters
// rest parameters are used to prevent an indefinite number of arguments as an array.
// it allows you to pass an arbitary number of arguments  to a function

// example 8

function sum{a, b }{
    return a + b;
}
function sum(...args){
    return args;
}

console.log(sum(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]
