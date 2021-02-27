var path = require("path");
const db = require("../models");

module.exports = function (app) {
  // ===============================================================================
  // HTML ROUTES
  // ===============================================================================
  app.get("/", function (req, res) {
    res.render("pages/index");
  });

  // app.get("/2021", function (req, res) {
  //   res.render("pages/2021");
  // });

  // If no matching route is found, return the 404 page
  app.get("*", function (req, res) {
    res.render("pages/404");
  });
};