const http = require('http');
const fs = require('fs');

const web = fs.readFileSync('D:\\Web Development\\Projects\\Project 2\\index.html');

const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type' : 'css/html'});
    res.write(web);
    res.end();
})

server.listen(80, '127.0.2.1', ()=>{
    console.log("Listening at port 80");
})