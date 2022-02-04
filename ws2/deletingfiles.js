let fs = require('fs');

fs.unlink('combiningfiles.js', (err) => {
    if (err) console.error(err);
    console.log('combiningfiles.js deleted');
})