const http = require('http');
const fs = require('fs');

let frontpage = fs.readFileSync('frontpage.txt').toString();
let contact = fs.readFileSync('contact.txt').toString();
let example = fs.readFileSync('example.txt').toString();
let jsonSample = fs.readFileSync('sampledata.json').toString();

http.createServer(function (request,response) {

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

}).listen(8081);

console.log ('Server running at http://127.0.0.1:8081/');

/*
https://pastebin.com/mmN3YtKK
https://pastebin.com/fH6UBa4g
*/