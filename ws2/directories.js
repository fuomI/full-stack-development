// Import file system
const fs = require('fs');

/* Adding new directory 'newdata'
fs.mkdir(__dirname + '/newdata', {recursive: true}, (err) => {
    if(err) return console.error(err);
});
*/

// Removing directory (Doesn't work if dir not empty)
fs.rmdir(__dirname + '/newdata', (err) => {
    if(err) return console.error(err);
});

/* Removes file 'combiningfiles.js' from newdata folder
fs.rm(__dirname + '/newdata/combiningfiles.js', (err) => {
    if(err) return console.error(err);
});
*/


