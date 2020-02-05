$(document).ready(function(){

    $(document).on("click", ".btn", function(event){
        event.preventDefault(); 
        document.location.href="/passenger";
    });
    $(document).on("click", "#ship", function (event) {
        event.preventDefault(); 
        document.location.href="/timeline/ship";
    });
    $(document).on("click", "#activities", function (event) {
        event.preventDefault(); 
        document.location.href="/timeline/activities";
    });
    $(document).on("click", "#lodging", function (event) {
        event.preventDefault(); 
        document.location.href="/timeline/lodging";
    });
    $(document).on("click", "#dining", function (event) {
        event.preventDefault(); 
        document.location.href="/timeline/dining";
    });
    $(document).on("click", "#sink", function (event) {
        event.preventDefault(); 
        document.location.href="/timeline/sink";
    });        
    $(document).on("click", "#fate", function (event) {
        event.preventDefault(); 
        document.location.href="/fate";
    });        

    $(document).on("click", "#234", function(event){
        event.preventDefault(); 
        document.location.href="/timeline";
    });
    $(document).on("click", "#686", function(event){
        event.preventDefault(); 
        document.location.href="/timeline";
    });
    $(document).on("click", "#536", function(event){
        event.preventDefault(); 
        document.location.href="/timeline";
    });
    $(document).on("click", "#807", function(event){
        event.preventDefault(); 
        document.location.href="/timeline";
    });
    $(document).on("click", "#357", function(event){
        event.preventDefault(); 
        document.location.href="/timeline";
    });
});
