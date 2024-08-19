/*
Array Properties
constructor
length
prototype

Array Methods
concat()
indexOf()
join()
lastIndexOf()
pop()
push()
reverse()
shift()
slice()
sort()
splice()
toString()
unshift()
valueOf()
*/ 
// array - linerar arrangement of data 
let student = ["a", "b", "c", 32];
// arrays are mutable 
student[0] = 23;
console.log(student);

// Array methods
student.push(23);// add to end 
student.pop();// removes from the last
student.unshift(13);// ADD to start 
student.shift(); // Delete Form start 
console.log(student);
// shift unshift not only perfom operations but also returns array

// Index of 
console.log(student.indexOf(23));
// returns index otherwise return -1 if not found 

// includes -  search for a value and returns t/f
// concat / merge two arrays 

// reverse - reverse array 
console.log(student.reverse());
console.log(student);

// slice - gives copy of the poriton of the array 
console.log(student.slice(2)); // lenght 4 lenght - 2 = 2 then pahile two sodun deil 
console.log(student.slice(0,2));
console.log(student.slice(-2));// 4-2 = 2 last two
console.log(student.slice(-1)); // 4-1 = 3  return last 1 
console.log(student.slice(1)); // 

// splice - removes/ replace / add/ element in place 
// splice - staart . delete count, item 0 -- item N
console.log(student.splice(2));

/* 
slice()
The slice() method returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.

*/

let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
let citrus = fruits.slice(1, 3);
console.log(citrus); // ['Banana', 'Cherry']
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date', 'Fig']


/* 
splice()
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.

Use Cases
Adding elements to an array at a specific index.
Removing elements from an array.
Replacing elements in an array

*/
let f = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
let removed = fruits.splice(2, 2, 'Grape', 'Honeydew');
console.log(removed); // ['Cherry', 'Date']
console.log(f); // ['Apple', 'Banana', 'Grape', 'Honeydew', 'Fig']


// sort - sorts array
// it sorts in assending order 
// constant arrays 
// nested array - multidimensional arrays 
// array of arrays 
let nums = [[2,3], [234.,324], [234,3245,243]];
console.log(nums);