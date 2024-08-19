// Very Important 
// charAt()
// charCodeAt()
// concat()
// fromCharCode()
// indexOf()
// lastIndexOf()
// match()
// replace()
// search()
// slice()
// split()
// substr()
// substring()
// toLowerCase()
// toUpperCase()
// valueOf()

// String Methods 
// Methods - actions that can be performed on object 
// Note _ Strings are Immutabel in js No changes can be made t string whenever we try to change it create new one original remains constant 


console.log() // .log is a method 
let a = "   Tejas ";
let str = "Tejas Sunil Surse";
console.log("String before Changes ", a);
// trim  = trims whitespaces from both ends of String & return new One
let trimmed = a.trim(); 
console.log(trimmed);

// touppercase, tolowerCase 
console.log(a.toUpperCase());
console.log(a.toLowerCase());

// string methods with arguments 
console.log(str.indexOf("j"));
console.log(str.indexOf("z"));

// method chaining / more than one methds in one operator 

let msg = "   YT  ";
console.log(msg.trim().toLowerCase());

// slice - return part of original string axs a new string 

let slicedStr = str.slice(5); // when passed one parameter it return remaining bhag not tukda  i.e length - num chay pudche 
console.log(slicedStr);
slicedStr = str.slice(0, 7); // when passed two parameters then it return the tukda and alsoe give less value then big value 
console.log(slicedStr);
console.log(str.slice(-2)); // it will return lenght - value 
console.log(str.length);// here lenght is 17 i.e it will return 17- 2 = 15  15,16 is se


// replace 
// searches a vlue in the stirng and return a new string with the value replaced 

console.log(str.replace("Tejas ", "Shital "));

