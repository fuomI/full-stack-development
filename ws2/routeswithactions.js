// Import http and file system
const http = require('http');
const fs = require('fs');

// Declare different routes' contents as string type
let frontpage = fs.readFileSync('frontpage.txt').toString();
let contact = fs.readFileSync('contact.txt').toString();
let example = fs.readFileSync('example.txt').toString();
let jsonSample = fs.readFileSync('sampledata.json').toString();

// Create http server
http.createServer(function (request,response) {

    // Depending on route, write different content

    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'Text/plain'});
        response.write('Nothing to see here');
    }

    else if (request.url === '/frontpage') {
        response.writeHead(200, {'Content-Type': 'Text/html'});
        response.write(frontpage);
    }

    else if (request.url === '/contact') {
        response.writeHead(200, {'Content-Type': 'Text/html'});
        response.write(contact);
    }

    else if (request.url === '/plaintext') {
        response.writeHead(200, {'Content-Type': 'Text/plain'});
        response.write(example);
    }

    else if (request.url === '/json') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(jsonSample);
    }


    response.end();

}).listen(8081); // Listening port 8081

console.log ('Server running at http://127.0.0.1:8081/');
