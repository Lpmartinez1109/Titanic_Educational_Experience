var express = require("express");
var router = express.Router();
var db = require("../model");

var passengers = [];

router.get("/", function(req, res) {
    res.render('index');

});

router.get("/passenger", function(req, res) {
    db.Passenger.findAll({
        where:{
            id: 234
        }
    }).then(passenger => {
        passengers.push(passenger[0].dataValues);

        res.render("passenger", passenger[0].dataValues);
    });
    
});

router.get("/timeline", function(req,res){
    res.render("timeline");

});



module.exports = router;