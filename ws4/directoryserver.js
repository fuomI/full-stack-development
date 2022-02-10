const express = require('express');
const app = express();

app.use(express.static('jonin-treenivinkit/'));

app.listen(8081);
console.log('8081 is the port');