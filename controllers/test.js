var db = require("../model");

module.exports = function(app){
    app.get("/test/:id",function(req,res){
        console.log("Hitting Route")
        console.log("params", req.params);
        db.Passenger.findAll({
            where:{
                id:req.params.id
            }
        }).then(db=>{
            console.log(db[0].dataValues);
            res.render("test",db[0].dataValues)
            
        })
    })
}