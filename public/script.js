$(document).ready(function(){



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



    $(document).on("click", ".btn", function(event){
    event.preventDefault(); 
    console.log("clicked");
        document.location.href="/passengers";
    });

})