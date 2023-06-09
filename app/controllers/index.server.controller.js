/* Sudent Name: Selene Chhangur 
- Student ID: 300742304 
- File Name: index.server.controller.js 
- Date: June 9, 2023 
- COMP 229 Web Application Development */

exports.render = function (req, res) {
  res.render("index", {
    title: "Portfolio",
  });
};
