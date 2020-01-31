var titanic = [];
var passenger = [];

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