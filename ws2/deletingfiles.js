// Import file system
const fs = require('fs');

// Deletes combiningfiles.js from current folder
fs.unlink('combiningfiles.js', (err) => {
    if (err) return console.error(err);
    console.log('combiningfiles.js deleted');
})