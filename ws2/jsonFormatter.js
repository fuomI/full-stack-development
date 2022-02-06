// Import file system and http
const fs = require('fs');
const http = require('http');

// Read raw data and parse to json obj(jsonContent)
let contents = fs.readFileSync("sampledata.json");
let jsonContent = JSON.parse(contents);

/* Iterate through JSON data
for (let i = 0; i < jsonContent.length; i++) {
    if (i === 0) {
        console.log("<table border='1'>")
    }
    console.log("<tr>");
    console.log("<td>" + jsonContent[i].name + "</td>");
    console.log("<td>" + jsonContent[i].age + "</td>");
    console.log("<td>" + jsonContent[i].company + "</td>");
    console.log("<td>" + jsonContent[i].address + "</td>");
    console.log("</tr>")
}
*/

// Create http server
http.createServer(function (request, response) {

    // status 200 = OK, Content-Type: text/html
    response.writeHead(200, {'Content-Type' : 'text/html'});

    // Write the contents of jsonContent into response
    for (let i = 0; i < jsonContent.length; i++) {
        if (i === 0) {
            response.write("<table border='1'>")
        }
        response.write("<tr>");
        response.write("<td>" + jsonContent[i].name + "</td>");
        response.write("<td>" + jsonContent[i].age + "</td>");
        response.write("<td>" + jsonContent[i].company + "</td>");
        response.write("<td>" + jsonContent[i].address + "</td>");
        response.write("</tr>")
    }

    // End response
    response.end();
}).listen(8081); // listening port 8081

console.log("Server running at http://127.0.0.1:8081/");