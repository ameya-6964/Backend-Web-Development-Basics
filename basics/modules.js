// Everything Will Be imported From people.js

/* 
* First Method  
const xyz = require("./people");

console.log(xyz.ages);
console.log(xyz.peoples); 
*/

// * Destructuring Method

const { peoples, ages } = require("./people");

console.log(peoples);
console.log(ages);

// * Some Common Operating System Methods in Node.js
const os = require("os");
console.log(os.platform()); //win32
console.log(os.release()); // 10.0.22621
console.log(os.type()); // Windows_NT
