/* Student Name: Selene Chhangur 
- Student ID: 300742304 
- File Name: express.js 
- Date: June 9, 2023 
- COMP 229 Web Application Development */

// express application setup and configuration
var express = require("express"),
  morgan = require("morgan"),
  compress = require("compression"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

module.exports = function () {
  var app = express();
  // logging and compression middleware
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }

  // request parsing and method overriding middleware
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());

  // view engine and routes configuration
  app.set("views", "./app/views");
  app.set("view engine", "ejs");

  // routes configuration
  app.use("/", require("../app/routes/index.server.routes.js"));
  //require('../app/routes/index.server.routes.js')(app);

  // static file serving middleware
  app.use(express.static("./public"));
  app.use(express.static("./node_modules"));

  //needs to be after the route
  app.use(express.static("./public"));
  return app;
};
