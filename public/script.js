$(document).ready(function(){

    $(document).on("click", ".btn", function(event){
        event.preventDefault(); 
        console.log("clicked");
        document.location.href="/passenger";
    });

    $(document).on("click", ".passenger-img", function(event){
        event.preventDefault(); 
        console.log("clicked");
        document.location.href="/timeline";
    });


});
