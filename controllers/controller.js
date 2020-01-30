var express = require("express");
var router = express.Router();
var db = require("../model/index");

router.get("/", function(req, res) {
    db.Titanic.findAll({}).then((dbTitanic)=> {
        res.render('index', {titanic: dbTitanic})
    })
});

module.exports = router;