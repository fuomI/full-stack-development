// Import file system and http modules
const fs = require('fs');
const http = require('http');

// Read json raw data
let jsonData = fs.readFileSync('dataset.json');

// let jsonContent = JSON.parse(jsonData);

/* Create new json object
let newData = { "name": "John Doe",
"age": "52", "company": "Laurea",
"address": "Ratatie 22"};

// Push the created obj to the array
jsonContent.push(newData);

// Change the raw json data to a string
let updatedContent = JSON.stringify(jsonContent);

// Write the original data with additions to 'dataset.json'
fs.writeFile('dataset.json', updatedContent, (err) => {
    if (err) return console.error(err);
    console.log("New data added to file: dataset.json");
});
*/

/* Delete the obj we just added
delete jsonContent[7];

// Transform raw data to string
let updatedContent = JSON.stringify(jsonContent);

// Write to 'dataset.json' with the obj deleted
fs.writeFile('dataset.json', updatedContent, (err) => {
    if (err) return console.error(err);
    console.log("Data deleted from dataset.json");
});
*/

// Create http server
http.createServer(function (request, response) {

    // Status = 200 OK, Content-Type: text/json
    response.writeHead(200, {'Content-Type' : 'text/json'});

    // Write raw json data as response
    response.write(jsonData);

    // End response
    response.end();
}).listen(8081); // listening port 8081

console.log("Server running at: http://127.0.0.0:8081/");
