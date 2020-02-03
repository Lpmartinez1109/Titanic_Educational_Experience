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
    $(document).on("click", "#information", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/information";
    });
    $(document).on("click", "#shipfacts", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/ship";
    });
    $(document).on("click", "#classinfo", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/class";
    });
    $(document).on("click", "#activities", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/activities";
    });
    $(document).on("click", "#nightlife", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/timeline/nightlife";
    });        
    $(document).on("click", "#fate", function (event) {
        event.preventDefault(); 
    console.log("clicked");
        document.location.href="/fate";
    });        

});
