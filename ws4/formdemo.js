let express = require('express');
let fs = require('fs');
let app = express();

// Require the module required for using form data
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

// Serve a form to the user
app.get('/adduser', function (req, res) {
    res.sendFile(__dirname + "/adduser.html");
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

app.post('/adduser', function (req, res) {

    // Load data from file
    let data = require('./exampledata2.json');

    // Create new JSON object and add it
    data.push({
        "Name": req.body.name,
        "Company": req.body.company,
        "Email": req.body.email,
        "Date": new Date()
    });

    // Convert the JSON object to a string
    let jsonStr = JSON.stringify(data);

    // Write data to the file
    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if (err) throw err;
        console.log('Data is saved');
    });

    res.send('Saved the data to a file. Browse to the /details to see the contents');
});

// The route 404 (Always last)
app.get('*', function(req, res) {
    res.send("Can't find the requested page", 404);
});

app.listen(8081, function () {
    console.log("Server running at http://localhost:8081");
});

