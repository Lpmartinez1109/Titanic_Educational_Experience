var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./model")

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller");

app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Server listening on: http://localhost:" + PORT);

    });
  });