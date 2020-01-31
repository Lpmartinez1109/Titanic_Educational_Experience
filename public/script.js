var titanic = [];
var passenger = [];
var timeline = [];
function getTitanic() {
    $.get("/", function (data) {
        titanic = data;
    })
    
}
function getPassenger(){
    $.get("/passengers", function(data){
        passenger = data;
    })
}
function getTimeline(){
    $.get("/timeline", function(data){
        timeline = data;
    })
}