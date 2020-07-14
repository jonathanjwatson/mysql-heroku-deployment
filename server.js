const express = require("express");
const TestController = require("./controllers/testController");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(TestController);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log(process.env.GOOGLE_API_KEY);
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
