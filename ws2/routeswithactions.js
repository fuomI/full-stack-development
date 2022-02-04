const http = require('http');
const fs = require('fs');

let frontpage = fs.readFileSync('example.txt');

http.createServer(async function (request,response) {

    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'Text/plain'});
        response.write('Nothing to see here');
    }

    if (request.url === '/frontpage') {
        response.writeHead(200, {'Content-Type': 'Text/html'});
        response.write(frontpage);
    }


    response.end();

}).listen(8081);

console.log ('Server running at http://127.0.0.1:8081/');

/*
https://pastebin.com/mmN3YtKK
https://pastebin.com/fH6UBa4g
*/