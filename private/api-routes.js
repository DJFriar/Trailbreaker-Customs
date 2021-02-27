/* eslint-disable prefer-arrow-callback */
// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/riders", function(req, res) {
    db.User.all(function(data) {
      const hbsObject = {
        users: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Get all bikes
  app.get("/api/bikes", function(req, res) {
    db.Bike.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });


  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

};
