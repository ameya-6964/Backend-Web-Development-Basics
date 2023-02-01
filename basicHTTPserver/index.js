//! Always Import HTTP Module
const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // setting Headers
  res.setHeader("Content-Type", "text/html");
  res.write("<h1> Hello World </h1>");
  res.write("<h2> Hello User Welcome </h2>");
  res.end();
});

server.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});
