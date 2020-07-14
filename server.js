/**
 * REQUIRE NPM PACKAGES
 * REQUIRE EXTERNAL FILES
 */

const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const TestController = require("./controllers/testController");

/**
 * DEFINE VARIABLES
 */
const PORT = process.env.PORT || 8080;
const app = express();

/**
 * MIDDLEWARE
 */
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(morgan())
/**
 * VIEW ROUTES
 * API ROUTES
 */
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Routes
app.use(TestController);

/**
 * APP LISTEN
 */
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log(process.env.GOOGLE_API_KEY);
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
