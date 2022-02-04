let fs = require('fs');

console.log("Program started");

// Naming callback function, defining later
fs.readFile('example.txt', results);

for (let i = 0; i < 10; i++) {
    console.log("Node just keeps on going...");
}

// Function to deal with fileread results
function results(err,data) {
    if (err) return console.error(err);
    console.log("Results of fileread:");
    console.log(data.toString());
}

