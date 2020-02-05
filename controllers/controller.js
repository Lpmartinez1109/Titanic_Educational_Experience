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

        db.Passenger.findAll({
                where:{
                Passengerid: passByID,
                }
        }).then(passenger => {
                // images from wiki
                console.log(passenger[0].dataValues);
                
                for (i=0; i<passByID.length; i++){
                        if(passenger[i].dataValues.Passengerid == images[i].id){
                                passenger[i].image = images[i].img1
                        }
                }
                res.render("passenger", {passengers:passenger});
        });

});
// router.post("/passenger", function(req, res){
//         db.userChoice.create
// })

router.get("/timeline", function(req,res){
        res.render("timeline");

});

router.get("/ship", function(req,res){
        res.render("ship")
});
router.get("/activities", function(req,res){
        res.render("activities")
});
router.get("/lodging", function(req,res){
        res.render("lodging")
});
router.get("/dining", function(req,res){
        res.render("dining")
});
router.get("/sink", function(req,res){
        res.render("sink")
});
router.get("/fate", function(req,res){
        res.render("fate")
});

module.exports = router

