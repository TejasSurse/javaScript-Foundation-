/* 
< 
>
<=
>=
==
===
!= 

These are the expression which returns boolean results
true and false

*/
let am = 10;
let bm = 23;
console.log(a==b); // compare values always not datatype
b = 10;
console.log(a== b); 
console.log(a === b);

let cm = 10;
let dm = '10';
console.log(d == a);
console.log(b === d);

// Arithmetic Operators
// Addition (+)
let sum = 5 + 3; // sum is 8
console.log('Addition:', sum); // Output: 8

// Subtraction (-)
let difference = 5 - 3; // difference is 2
console.log('Subtraction:', difference); // Output: 2

// Multiplication (*)
let product = 5 * 3; // product is 15
console.log('Multiplication:', product); // Output: 15

// Division (/)
let quotient = 6 / 3; // quotient is 2
console.log('Division:', quotient); // Output: 2

// Modulus (%)
let remainder = 5 % 3; // remainder is 2
console.log('Modulus:', remainder); // Output: 2

// Increment (++)
let count = 5;
count++; // count is 6
console.log('Increment:', count); // Output: 6

// Decrement (--)
let countDown = 5;
countDown--; // countDown is 4
console.log('Decrement:', countDown); // Output: 4

// Assignment Operators
// Assignment (=)
let x = 5; // x is assigned the value 5
console.log('Assignment:', x); // Output: 5

// Addition assignment (+=)
let a = 5;
a += 3; // a is now 8
console.log('Addition Assignment:', a); // Output: 8

// Subtraction assignment (-=)
let b = 5;
b -= 3; // b is now 2
console.log('Subtraction Assignment:', b); // Output: 2

// Multiplication assignment (*=)
let c = 5;
c *= 3; // c is now 15
console.log('Multiplication Assignment:', c); // Output: 15

// Division assignment (/=)
let d = 6;
d /= 3; // d is now 2
console.log('Division Assignment:', d); // Output: 2

// Modulus assignment (%=)
let e = 5;
e %= 3; // e is now 2
console.log('Modulus Assignment:', e); // Output: 2

// Comparison Operators
// Equal to (==)
console.log('Equal to:', 5 == '5'); // true (type conversion happens)

// Strict equal to (===)
console.log('Strict equal to:', 5 === '5'); // false (no type conversion)

// Not equal to (!=)
console.log('Not equal to:', 5 != '5'); // false (type conversion happens)

// Strict not equal to (!==)
console.log('Strict not equal to:', 5 !== '5'); // true (no type conversion)

// Greater than (>)
console.log('Greater than:', 5 > 3); // true

// Less than (<)
console.log('Less than:', 5 < 3); // false

// Greater than or equal to (>=)
console.log('Greater than or equal to:', 5 >= 3); // true

// Less than or equal to (<=)
console.log('Less than or equal to:', 5 <= 3); // false

// String Operators
// Concatenation (+)
let str = 'Hello' + ' ' + 'World'; // str is 'Hello World'
console.log('Concatenation:', str); // Output: Hello World

// Logical Operators
// Logical AND (&&)
console.log('Logical AND:', true && false); // false
console.log('Logical AND:', true && true);  // true

// Logical OR (||)
console.log('Logical OR:', true || false); // true
console.log('Logical OR:', false || false); // false

// Logical NOT (!)
console.log('Logical NOT:', !true); // false
console.log('Logical NOT:', !false); // true

// Bitwise Operators
// Bitwise AND (&)
console.log('Bitwise AND:', 5 & 1); // 1 (binary: 0101 & 0001 = 0001)

// Bitwise OR (|)
console.log('Bitwise OR:', 5 | 1); // 5 (binary: 0101 | 0001 = 0101)

// Bitwise XOR (^)
console.log('Bitwise XOR:', 5 ^ 1); // 4 (binary: 0101 ^ 0001 = 0100)

// Bitwise NOT (~)
console.log('Bitwise NOT:', ~5); // -6 (binary: ~0101 = 1010)

// Left shift (<<)
console.log('Left shift:', 5 << 1); // 10 (binary: 0101 << 1 = 1010)

// Right shift (>>)
console.log('Right shift:', 5 >> 1); // 2 (binary: 0101 >> 1 = 0010)

// Ternary Operator
// Ternary (conditional) operator (?:)
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No'; // canVote is 'Yes'
console.log('Ternary Operator:', canVote); // Output: Yes

// Type Operators
// `typeof` operator
console.log('typeof 123:', typeof 123); // 'number'
console.log('typeof "Hello":', typeof 'Hello'); // 'string'
console.log('typeof true:', typeof true); // 'boolean'
console.log('typeof undefined:', typeof undefined); // 'undefined'
console.log('typeof {}:', typeof {}); // 'object'
console.log('typeof null:', typeof null); // 'object' (this is a historical quirk in JavaScript)
console.log('typeof function(){}:', typeof function(){}); // 'function'

// `instanceof` operator
let arr = [];
console.log('arr instanceof Array:', arr instanceof Array); // true
console.log('arr instanceof Object:', arr instanceof Object); // true
console.log('arr instanceof Function:', arr instanceof Function); // false
