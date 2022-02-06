// Import file system
const fs = require('fs');

// Read contents of this directory
fs.readdir(__dirname, results);

// For each file print file name to console
function results(err, files) {
    if (err) return console.error(err);
    files.forEach(file => {
        console.log(file);
    });
}