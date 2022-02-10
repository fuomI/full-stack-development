const express = require('express');
const app = express();

// First route shows the index.html of jonin-treenivinkit
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/jonin-treenivinkit/index.html");
});

// Route displaying exampledata.txt
app.get('/list', function (req, res) {
    res.sendFile(__dirname + "/exampledata.txt");
});

// Route displaying json data
app.get('/jsondata', function (req,res) {
    let data = require('./exampledata2.json');
    res.json(data);
});

// Route displaying json data in HTML table
app.get('/details', function (req, res) {
    let data = require('./exampledata2.json');

    // Parse the results into a variable
    let results = '<table style="border:1px solid black;">';

    for (let i = 0; i < data.length; i++) {
        results += '<tr>';
        results += '<td style="border:1px solid black;">' + data[i].Name + '</td>';
        results += '<td style="border:1px solid black;">' + data[i].Email + '</td>';
        results += '<td style="border:1px solid black;">' + data[i].Date + '</td>';
        results += '<td style="border:1px solid black;">' + data[i].Company + '</td>';
        results += '</tr>';
    }
    res.send(results);
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

