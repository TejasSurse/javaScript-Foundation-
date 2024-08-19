/* If statement
Else statement
Else if statement
Ternary operator
Switch statement
*/

let a = 23;
let b = 2323;
if(a == b){
    console.log("both are equal");
}else{
    console.log("both are not equal");
}


if ( a < b ){
    console.log("a is less then b ");

}
else if(a < b){
    console.log("a is less then b again ");
}
else if(a > b){
    console.log("a is greaater then be ");
}

if ( a < b ){
    console.log("a is less then b ");

}
if(a < b){
    console.log("a is less then b again ");
}
if(a > b){
    console.log("a is greaater then be ");
}


// ternary operator 
let m = 23;
let n = 25;

a < b ? console.log("a is less then b "): console.log("a is greter then b ");



let s = 22;


switch(s ){
    case 2:
        console.log(`Switch is at ${2}`);
    case 22:
        console.log("Switch is at", 22);
}


// Nested if else 
// Example of a nested if-else statement

let age = 20;
let isStudent = true;

if (age < 18) {
    console.log('You are a minor.');
} else {
    if (age < 21) {
        if (isStudent) {
            console.log('You are a young student.');
        } else {
            console.log('You are a young adult.');
        }
    } else {
        if (isStudent) {
            console.log('You are an adult student.');
        } else {
            console.log('You are an adult.');
        }
    }
}
