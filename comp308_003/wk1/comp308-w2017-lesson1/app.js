// built in way to get a reference to a module
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// server gets created here
// arrow function returning an object; server response object
// old way of writing this was using callback function e.g. function (req,res) {}
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Beautiful World\n');
});

// server event
// listening for any requests coming into the given hostname:port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});