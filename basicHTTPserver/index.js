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
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
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
