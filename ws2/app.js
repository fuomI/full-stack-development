// Import file system
const fs = require("fs");

console.log("Program started");

// Raw data of a file - the blocking way
let data = fs.readFileSync('example.txt');

// Print data as a string to the console
console.log(data.toString());

// Starts after the file is read and printed.
for (let i = 0; i < 10; i++) {
    console.log("Node just keeps on going...");
}

console.log("Program ended");