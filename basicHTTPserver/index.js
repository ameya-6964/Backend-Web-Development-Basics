//! Always Import HTTP Module
const http = require("http");
const port = 8000;
//! File System Module To Read Files

const fs = require("fs");

//? Basic Request and Response Server
function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });

  fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.log(`Error ${err}`);
      return res.end("<h1 style = color:red > Gotchaaa <h1/>");
    }
    return res.end(data);
  });
  //// res.end("<h1 style = color:red > Gotchaaa <h1/>");
}

//* Create Server Syntax
const server = http.createServer(requestHandler);
server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server Is Running ${port}`);
});
