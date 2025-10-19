// if there is 1 function the we export like this but in case of more than 1 we export in object

// function add(a,b){
//     return a+b;
// }
// module.exports = add; 


// more than 1

// Function to add two numbers
function add(a, b) {
    return a + b; // returns the sum of a and b
}

// Function to subtract two numbers
function sub(a, b) {
    return a - b; // returns the difference of a and b
}

// Exporting multiple functions as an object
// so they can be used in other files
module.exports = {
    addfn: add, // property name 'addfn' maps to function 'add'
    subfn: sub   // property name 'subfn' maps to function 'sub'
};
