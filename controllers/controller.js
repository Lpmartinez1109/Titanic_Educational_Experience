var express = require("express");
var router = express.Router();
var db = require("../model/index");

router.get("/", function(req, res) {
    db.Titanic.findAll({}).then((dbTitanic)=> {
        res.render('index', {titanic: dbTitanic})
    })
});
router.get("/passengers", function(req, res) {
    db.Passenger.findAll({}).then((dbPassenger)=>{
        res.render("passenger", {passengers: dbPassenger})
    })
});
router.get("/timeline", function(req,res){
    db.Timeline.findAll({}).then((dbTimeline)=> {
        res.render("timeline", {timeline:dbTimeline})
    })
})
module.exports = router;