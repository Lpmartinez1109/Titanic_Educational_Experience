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

    // db.Passenger.findAll({
    //     where:{
    //         id: 686
    //     }
    // }).then(passenger => {
    //     passengers.push(passenger[0].dataValues);

    //     res.render("passenger", passenger[0].dataValues);
    // });

    // db.Passenger.findAll({
    //     where:{
    //         id: 194
    //     }
    // }).then(passenger => {
    //     passengers.push(passenger[0].dataValues);

    //     res.render("passenger", passenger[0].dataValues);
    // });

    // db.Passenger.findAll({
    //     where:{
    //         id: 807
    //     }
    // }).then(passenger => {
    //     passengers.push(passenger[0].dataValues);

    //     res.render("passenger", passenger[0].dataValues);
    // });

    // db.Passenger.findAll({
    //     where:{
    //         id: 357
    //     }
    // }).then(passenger => {
    //     passengers.push(passenger[0].dataValues);

    //     res.render("passenger", passenger[0].dataValues);
    // });
    // console.log(passengers);

    
});

router.get("/timeline", function(req,res){
    res.render("timeline");

});

router.get("/timeline/information", function(req,res){
    res.render("information")
    
});

router.get("/timeline/ship", function(req,res){
    res.render("ship")
});

router.get("/timeline/class", function(req,res){
    res.render("class")
});

router.get("/timeline/activities", function(req,res){
    res.render("activities")
});

router.get("/timeline/nightlife", function(req,res){
    res.render("nightlife")
});

router.get("/timeline/sink", function(req,res){
    res.render("sink")
});

router.get("/fate", function(req,res){
    res.render("fate")
});

module.exports = router;