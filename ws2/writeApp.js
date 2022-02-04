let fs = require('fs');

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

let newFile = 'combiningfiles.js';

let data = fs.readFileSync(fileOne).toString();
let dataTwo = fs.readFileSync(fileTwo).toString();
let allData = data + "\r\n" + dataTwo;

// We want this to the start
let iWroteStart = "I wrote this!\r\n";

// Write
fs.writeFile(newFile, iWroteStart, err => {
    if (err) console.error(err);
});

// Append
fs.appendFile(newFile, allData, (err) => {
    if (err)
        console.error(err);
});

// We want to append this string to the file.
let iWroteEnd = "\r\nI wrote this!";

// Append to the end of file
fs.appendFile(newFile, iWroteEnd, err => {
    if (err) console.error(err);
    console.log("The desired data was appended to end");
});
