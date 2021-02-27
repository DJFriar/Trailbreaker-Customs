require("dotenv").config();

var express = require("express");

// ==============================================================================
// CONFIGURATION
// ==============================================================================
const app = express();
const PORT = process.env.PORT || 3600;
const db = require("./models");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("static"));
app.use(express.static("private"));

// ================================================================================
// ROUTES
// ================================================================================
require("./private/api-routes")(app);
require("./private/html-routes")(app);

// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

// Use this one when DB is configured
// db.sequelize.sync({ force: true })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//       );
//     });
//   });