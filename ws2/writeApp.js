// Import file system
const fs = require('fs');

// Save file names to variables
let fileOne = 'example.txt';
let fileTwo = "exampleTwo.txt";

// Read files using fs.readFile
fs.readFile(fileOne, results);
fs.readFile(fileTwo, results);

// Callback function
function results(err, data) {
    if (err) return console.error(err);
    console.log("Contents of the file:");
    console.log(data.toString());
    console.log("");
}

// File name and path of the new file
let newFile = __dirname + '/newdata/combiningfiles.js';

// data and dataTwo combined in one variable allData as a string
let data = fs.readFileSync(fileOne).toString();
let dataTwo = fs.readFileSync(fileTwo).toString();
let allData = data + "\r\n" + dataTwo;

// We want this to the start
let iWroteStart = "I wrote this!\r\n";

// We write this to the first line of the file
fs.writeFile(newFile, iWroteStart, err => {
    if (err) return console.error(err);
});

// Continue by appending the combined data
fs.appendFile(newFile, allData, (err) => {
    if (err) return console.error(err);
});

// We want to append this string to the end
let iWroteEnd = "\r\nI wrote this!";

// Append to the end of file
fs.appendFile(newFile, iWroteEnd, err => {
    if (err) return console.error(err);
    console.log("The desired data was appended to end");
});
