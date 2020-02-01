var express = require("express");
var router = express.Router();
var db = require("../model/index");
// var path = require("path");

router.get("/", function(req, res) {
        res.render('index')
});
router.get("/passengers", function(req, res) {
        res.render("passenger")
});
router.get("/timeline", function(req,res){
        res.render("timeline")
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