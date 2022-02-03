/* console.log("Hello World");

let x = 15+2;

console.log(x); */

let http  = require("http");
http.createServer(function (request, response) {

    // Send the HTTP header. HTTP Status: 200 = OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});

    // Adding Hello World -header
    response.write("<h1>Hello world!</h1>");

    // Adding a HTML table
    response.write("<table style='color: red'><tr><td>Name</td><td>Address</td><td>City</td></tr>"+
        "<tr><td><a href='https://www.google.fi'>Pekka Puupaa</a></td><td>Suotie 50, as 5</td><td>Helsinki</td></tr>"+
        "<tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr></table>")

    // Send the reponse body as "Hello World"
    response.end('Hello world, hello world indeed!\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
