let http = require('http');

http.createServer(function (request, response) {

    // Send HTTP request
    // Content-Type = text/html
    response.writeHead(200, { 'Content-Type': 'text/html'});

    if (request.url === "/homepage") {
        response.write("<h1>This is the homepage!</h1>");
    }

    else if (request.url === "/helloworld") {
        response.write("<h1>Hello world!!</h1>");
    }

    response.end();
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

