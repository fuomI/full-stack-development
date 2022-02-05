const fs = require('fs');
const http = require('http');

// Step 1:
let jsonData = fs.readFileSync('dataset.json');
// let jsonContent = JSON.parse(jsonData);
// console.log(jsonContent);

/* Step2:
let newData = { "name": "John Doe",
"age": "52", "company": "Laurea",
"address": "Ratatie 22"};

jsonContent.push(newData);

let updatedContent = JSON.stringify(jsonContent);

fs.writeFile('dataset.json', updatedContent, (err) => {
    if (err) return console.error(err);
    console.log("New data added to file: dataset.json");
}); */

/* Step 3:
delete jsonContent[7];

let updatedContent = JSON.stringify(jsonContent);

fs.writeFile('dataset.json', updatedContent, (err) => {
    if (err) return console.error(err);
    console.log("Data deleted from dataset.json");
}); */

// Step 4:

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type' : 'text/json'});

    response.write(jsonData);

    response.end();
}).listen(8081);

console.log("Server running at: http://127.0.0.0:8081/");
