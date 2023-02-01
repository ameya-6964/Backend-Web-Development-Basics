//! Always Import HTTP Module
//! Always Import File System Module
const http = require("http");
const fs = require("fs");
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  // Sending an HTML File
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Listening On Port ${port}`);
});
