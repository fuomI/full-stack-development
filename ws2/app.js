const fs = require("fs");

console.log("Program started");
let data = fs.readFileSync('example.txt');
console.log(data.toString());

for (let i = 0; i < 10; i++) {
    console.log("Node just keeps on going...");
}

console.log("Program ended");