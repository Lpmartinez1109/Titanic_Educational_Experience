$(document).ready(function(){
    // var titanic = [];
    // var passenger = [];
    // var timeline = [];

    // function getTitanic() {
    //     $.get("/", function (data) {
    //         titanic = data;
    //     });
        
    // }
    // function getPassenger(){
    //     $.get("/passengers", function(data){
    //         passenger = data;
    //     });
    // }
  
    // function getTimeline(){
    //   $.get("/timeline", function(data){
    //       timeline = data;
    //     });
    // }

    $(document).on("click", ".btn", function(event){
    event.preventDefault(); 
    console.log("clicked");
        document.location.href="/passenger";
    });
    $(document).on("click", "#ship", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/ship";
    });
    $(document).on("click", "#activities", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/activities";
    });
    $(document).on("click", "#lodging", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/lodging";
    });
    $(document).on("click", "#dining", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/dining";
    });
    $(document).on("click", "#sink", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/sink";
    });        
    $(document).on("click", "#fate", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/fate";
    });        

    $(document).on("click", "#234", function(event){
        event.preventDefault(); 
        console.log("clicked");
            document.location.href="/timeline";
    });

});
