// $("#wikipedia").on("click", function (event) {
//     event.preventDefault();
//     console.log("button clicked")
//     $.ajax({
//         // URL: "https://www.mediawiki.org/wiki/Special:MyLanguage/API:Opensearch" ,
//         URL: "https://cors-anywhere.herokuapp.com/en.wikipedia.org/w/api.php",
//         method: "GET",
//         search: "Lillian Asplund",
//         format: "json"
//     })
//     .then(res=>console.log(res))
// })

/*
    opensearch.js
    MediaWiki API Demos
    Demo of `Opensearch` module: Search the wiki and obtain
	results in an OpenSearch (http://www.opensearch.org) format
    MIT License
*/
$(document).ready(function () {
    var userInput = $("#wiki-search");








    function wikiSearch() {
        $("#wikipedia").on("click", function (event) {
            var passenger = userInput.val();

            var wikiUrl = "https://cors-anywhere.herokuapp.com/en.wikipedia.org//w/api.php?action=parse&format=json&page=" + passenger

            $.ajax({
                url: wikiUrl,
                // format: "json",
                method: "GET"
            }).then(function (info) {
                var mult = Object.keys(info.parse.text);
                console.log(info.parse.text["*"])
                $(".title").text(info.parse.title);

                $(".paragraph").html(info.parse.text["*"]);



            })
        })
        

    //     var url = "https://en.wikipedia.org/w/api.php"; 

    //     var params = {
    //         action: "opensearch",
    //         search: "Lilian Asplund",
    //         limit: "5",
    //         namespace: "0",
    //         format: "json"
    //     };

    //     url = url + "?origin=*";
    //     Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    //     fetch(url)
    //         .then(function(response){return response.json();})
    //         .then(function(response) {console.log(response[3][0]);})
    //         // .then(function(response) {$("#article").attr("src", response[3][0]);})
    //         .catch(function(error){console.log(error);});
    };
    $("#wikipedia").on("click", function(event){
        event.preventDefault();
        userInput.val();
        wikiSearch();
    });
    userInput.keypress(function (event) {
        if (event.which === 13) {
            wikiSearch();
        }
    });
});