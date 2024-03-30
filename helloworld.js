// const http =require('http');

// http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('Hello World!');
//     res.end();
// }).listen(8000);


const data =require('./data-module.js');
const http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'Application/JSON'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8000)