// Load express
let express = require('express');
let app = express();

// View engine to ejs
app.set('view engine', 'ejs');

// Index page
app.get('/', function(req, res) {
    res.render('pages/index', {
        new_heading: "This was passed from the JS file",
        new_paragraph:"Lorem ipsum...",
    });
});



app.listen(8081);
console.log('Server running at http://localhost:8081/');