const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('welcome to our page');
}
if(req.url === '/about'){
    res.end('here is our short history');
}
res.end('sorry!');
})
server.listen(5000);