// import http library
let http = require('http');

http.createServer(function (request, response) {

    // Send HTTP request
    // Content-Type = text/html
    response.writeHead(200, { 'Content-Type': 'text/html'});

    // route /homepage
    if (request.url === "/homepage") {
        response.write("<h1>This is the homepage!</h1>");
    }

    // route /helloworld
    else if (request.url === "/helloworld") {
        response.write("<h1>Hello world!!</h1>");
    }

    // End of response
    response.end();
}).listen(8081); // listening port 8081

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

