const fs = require('fs');

// Adding new directory

/*
fs.mkdir(__dirname + '/newdata', {recursive: true}, (err) => {
    if(err) console.error(err);
}); */

// Removing directory (Doesn't work if dir not empty)
fs.rmdir(__dirname + '/newdata', (err) => {
    if(err) console.error(err);
});

// Removes files and empty directories alike
/*
fs.rm(__dirname + '/newdata/combiningfiles.js', (err) => {
    if(err) console.error(err);
}); */


