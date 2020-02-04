var express = require("express");
var router = express.Router();
var db = require("../model");;
var images = require("../db/images.json");
var passByID = [234, 357, 536, 686, 807];
var passByName = []

router.get("/", function(req, res) {
    res.render('index');
});
router.get("/passenger", function(req, res) {

        console.log("Hitting Route")
        db.Passenger.findAll({
                where:{
                Passengerid: passByID
                }
        }).then(passenger => {
                // console.log(passenger);
                // images from wiki
                console.log("This is a string", images[0]);
                for (i=0; i<passByID.length; i++){
                        console.log(passenger[i].dataValues.Passengerid, images[i].id)
                if(passenger[i].dataValues.Passengerid == images[i].id){
                        console.log(`Hit Number ${i}`)
                        passenger[i].image = images[i].img1
                }
                }
                // console.log(passenger);

                res.render("passenger", {passengers:passenger});
});

});
router.get("/timeline", function(req,res){
        // console.log(req.params.id)
        // id=req.params.id
    res.render("timeline");
});

router.get("/timeline/ship", function(req,res){
        res.render("ship")
});
router.get("/timeline/activities", function(req,res){
        res.render("activities")
});
router.get("/timeline/lodging", function(req,res){
        res.render("lodging")
});
router.get("/timeline/dining", function(req,res){
        res.render("dining")
});
router.get("/timeline/sink", function(req,res){
        res.render("sink")
});
router.get("/fate", function(req,res){
        res.render("fate")
});

module.exports = router

