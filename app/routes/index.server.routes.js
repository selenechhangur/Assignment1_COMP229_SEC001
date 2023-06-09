/* Sudent Name: Selene Chhangur 
- Student ID: 300742304 
- File Name: index.server.routes.js 
- Date: June 9, 2023 
- COMP 229 Web Application Development */

var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});
module.exports = router;
