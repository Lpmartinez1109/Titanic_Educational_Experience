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
// console.log("hello routes",routes);


app.use(routes);

// require("./controllers/test")(app)

// app.get("/test/:id",function(req,res){
//     console.log("Hitting Route")
//     console.log("params", req.params);
//     db.Passenger.findAll({
//         where:{
//             id:req.params.id
//         }
//     }).then(db=>{
//         console.log(db[0].dataValues);
//         res.render("test",db[0].dataValues)
        
//     })
// })


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Server listening on: http://localhost:" + PORT);

    });
  });