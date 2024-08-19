/*
### JavaScript History:

1. **Creation:**
   - JavaScript was created in 1995 by Brendan Eich while he was working at Netscape Communications. It was originally called Mocha, then renamed to LiveScript, and finally to JavaScript.

2. **Standardization:**
   - In 1997, JavaScript was standardized under the name ECMAScript by the European Computer Manufacturers Association (ECMA). The first edition of the ECMAScript standard (ECMA-262) was published in June 1997.

3. **Versions:**
   - **ES1 (1997):** The first edition of the ECMAScript standard.
   - **ES2 (1998):** Editorial changes to align with the ISO/IEC 16262 international standard.
   - **ES3 (1999):** Added regular expressions, better string handling, and new control statements.
   - **ES5 (2009):** Added JSON support, array methods, stricter parsing and error handling, and "strict mode".
   - **ES6 (2015):** Also known as ECMAScript 2015 or ES2015, introduced let/const, arrow functions, classes, modules, promises, template literals, destructuring, and more.
   - **Subsequent Versions:** Annual releases have followed, with ES7 (2016), ES8 (2017), etc., each adding new features.

### Types of JavaScript:

JavaScript can be broadly categorized into different types based on its usage environment and features:

1. **Client-Side JavaScript:**
   - **Definition:** JavaScript that runs in the web browser.
   - **Usage:** Enhances the user interface and user interactions, manipulates the DOM, handles events, validates form data.
   - **Example:** 
     ```javascript
     document.getElementById('button').addEventListener('click', function() {
       alert('Button clicked!');
     });
     ```

2. **Server-Side JavaScript:**
   - **Definition:** JavaScript that runs on the server.
   - **Usage:** Handles server-side operations such as accessing databases, file systems, and APIs.
   - **Popular Framework:** Node.js.
   - **Example:** 
     ```javascript
     const http = require('http');

     http.createServer((req, res) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hello World\n');
     }).listen(3000);
     ```

### Differences between Client-Side and Server-Side JavaScript:

| Feature                       | Client-Side JavaScript                             | Server-Side JavaScript                             |
|-------------------------------|---------------------------------------------------|---------------------------------------------------|
| **Environment**               | Runs in the web browser (e.g., Chrome, Firefox)   | Runs on the server (e.g., Node.js environment)    |
| **Primary Use**               | Enhancing user experience and UI interactions     | Handling server-side operations and backend logic |
| **Execution Context**         | Limited to the browser's capabilities              | Access to server resources and system operations  |
| **Examples**                  | DOM manipulation, event handling                  | Database access, API handling, server configuration|
| **Libraries/Frameworks**      | jQuery, React, Angular                            | Express.js, Koa.js                                |
| **Security**                  | More exposed to security risks (e.g., XSS attacks)| More control over security measures               |
| **Performance**               | Depends on the client’s device and browser        | Depends on server resources and configuration     |

These categories and distinctions help understand the versatile roles JavaScript plays in both client and server environments. */