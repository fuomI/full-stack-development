let fs = require('fs');

fs.unlink('combiningfiles.js', (err) => {
    if (err) return console.error(err);
    console.log('combiningfiles.js deleted');
})