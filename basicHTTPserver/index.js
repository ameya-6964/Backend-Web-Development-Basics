//! Always Import HTTP Module
const http = require('http')
const port = 8000;

//? Basic Request and Response Server
function requestHandler(req,res)
{
    console.log(req.url);
    res.writeHead(200,{'content-type': 'text/html'})
    res.end("<h1 style = color:red > Gotchaaa <h1/>");
}

//* Create Server Syntax 
const server = http.createServer(requestHandler);
server.listen(port,function(err){
if(err)
{
    console.log(err);
    return
}

console.log(`Server Is Running On Port ${port}`)
})