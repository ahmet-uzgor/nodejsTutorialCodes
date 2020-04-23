const http = require("http");

const server = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
    response.write("<h1>Ahmet's website</h1>");
    response.end();
});

server.listen(8080);