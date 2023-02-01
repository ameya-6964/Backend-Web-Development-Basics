const fs = require("fs");

//! reading files
fs.readFile("./blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//! writing files

fs.writeFile("./blog1.txt", "Hello World", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("File Was Written Succesfully");
});

//! Creating files

fs.writeFile("./blog2.txt", "Hello World for Blog 2", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

//! Creating Directories

fs.mkdir("./assets", (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Assets Created`);
});
