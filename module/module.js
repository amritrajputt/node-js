// Importing the math module
// The module returns an object containing addfn and subfn
const math = require("./math");

// Using the functions from the imported module
console.log(math.addfn(2, 3));   // calls add function -> output: 5
console.log(math.subfn(23, 3));  // calls sub function -> output: 20

/*
Notes:
- For a single function export, we could do:
    const add = require("./math");
    console.log(add(5, 6));

- For multiple functions, export them as an object.
- Property names in the object can be different from the actual function names.
*/
