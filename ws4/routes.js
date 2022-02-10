const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/list', function (req, res) {
    res.send('Listing data from a file!');
});

app.get('/add', function (req, res) {
    res.send('Lets try to add some data to a file!');
});

// The route 404 (Always last)
app.get('*', function(req, res) {
    res.send("Can't find the requested page", 404);
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});