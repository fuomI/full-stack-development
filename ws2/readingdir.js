const fs = require('fs');

fs.readdir(__dirname, results);

function results(err, files) {
    if (err) return console.error(err);
    files.forEach(file => {
        console.log(file);
    });
}