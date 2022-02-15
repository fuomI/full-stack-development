// Load express
let express = require('express');
let app = express();

// View engine to ejs
app.set('view engine', 'ejs');

let data = {users:[
    {name: 'John', age: 25},
    {name: 'Mike', age: 42},
    {name: 'Samantha', age: 51}
]};


// Index page
app.get('/', function(req, res) {
    res.render('pages/index', {
        new_heading: "This was passed from the JS file",
        new_paragraph:"Lorem ipsum...",
    });
});

// Users
app.get('/users', function (req, res) {
    res.render('pages/users', data);
});


app.listen(8081);
console.log('Server running at http://localhost:8081/');