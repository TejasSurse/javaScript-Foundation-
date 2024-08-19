var c = 23;
console.log(c);
c = 244;

console.log(c);

c = 'a';
console.log(c);

c = true;
console.log(c);
/* 
TypeScript (TS)
Type System:

TypeScript is a statically typed language. This means that you can specify types for variables, function parameters, and return values.
Type checking helps catch errors at compile time, before running the code.
Compilation:

TypeScript code must be compiled (or transpiled) to JavaScript. The TypeScript compiler (tsc) converts TypeScript code into JavaScript.
This compilation step adds an extra layer of debugging and optimization.
Syntax and Features:

TypeScript includes all JavaScript features and adds additional ones, such as interfaces, enums, and generics.
It supports modern JavaScript features (like ES6 and beyond) and can compile down to older JavaScript versions for compatibility.
Tooling:

TypeScript often provides better tooling support, such as autocompletion, navigation, and refactoring in editors like Visual Studio Code, thanks to the type system.
Strongly-typed code helps with more accurate and helpful editor features.
Learning Curve:

TypeScript has a steeper learning curve compared to JavaScript because of its type system and additional features.
Developers need to understand and leverage the type system effectively to get the most benefit from TypeScript.
Usage:

TypeScript is widely used in larger, more complex projects where the type system can help manage and scale the codebase more effectively.
Popular frameworks like Angular are built with TypeScript.
JavaScript (JS)
Type System:

JavaScript is a dynamically typed language. Types are determined at runtime, which can lead to type-related errors during execution.
No type annotations are required.
Execution:

JavaScript is interpreted or just-in-time compiled by the browser or JavaScript engine (like V8 in Chrome).
There is no separate compilation step as with TypeScript.
Syntax and Features:

JavaScript is limited to the features defined by the ECMAScript specification, although modern JavaScript (ES6 and later) has introduced many powerful features.
Some features in TypeScript, like interfaces and enums, do not exist in JavaScript.
Tooling:

JavaScript has good tooling support, but it may not be as robust as TypeScript's due to the lack of static types.
Modern editors still provide useful features like linting and code formatting.
Learning Curve:

JavaScript is generally easier to pick up and start coding with, especially for beginners.
There is no need to understand a type system, making the initial learning process simpler.
Usage:

JavaScript is ubiquitous in web development and is the standard language for client-side scripting in browsers.
It's used in a wide range of applications, from small scripts to large-scale web applications.
Summary
TypeScript: Statically typed, requires compilation, better tooling, more features, steeper learning curve, preferred for large and complex projects.
JavaScript: Dynamically typed, interpreted, good tooling, standard web language, easier to learn, used everywhere in web development.
*/