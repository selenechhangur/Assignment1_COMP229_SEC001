/* Sudent Name: Selene Chhangur 
- Student ID: 300742304 
- File Name: server.js 
- Date: June 9, 2023 
- COMP 229 Web Application Development */

process.env.NODE_ENV = process.env.NODE_ENV || "development";
var express = require("./config/express"); // imports express configuration module
var app = express();
// start the server
app.listen(3000);
module.exports = app;
// server running message
console.log("Server running at http://localhost:3000/");
