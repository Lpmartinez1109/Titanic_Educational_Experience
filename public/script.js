var titanic = [];

function getTitanic() {
    $.get("/", function (data) {
        titanic = data;
    })
    
}