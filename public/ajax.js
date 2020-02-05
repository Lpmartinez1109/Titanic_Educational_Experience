function wikiSearch(person){
    /*
    opensearch.js
    MediaWiki API Demos
    Demo of `Opensearch` module: Search the wiki and obtain
    results in an OpenSearch (http://www.opensearch.org) format
    MIT License
    */
    event.preventDefault();
    console.log("\nWikiSearch hit\n");
    var url = "https://en.wikipedia.org/w/api.php"; 

    var params = {
        action: "opensearch",
        search: person,
        limit: "1",
        namespace: "0",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(response){return response.json();})
        // .then(function(response) {console.log(response[3][0]);})
        .then(function(response) {$("#article").attr("src", response[3][0]);})
        .catch(function(error){console.log(error);});
};
$("#la").on("click", function(event){
    event.preventDefault();
    // console.log(`\nbutton clicked\n`)
    wikiSearch("Lillian Asplund");
});
$("#eb").on("click", function(event){
    event.preventDefault();
    // console.log(`\nbutton clicked\n`)
    wikiSearch("Elsie Bowerman");
});
$("#eh").on("click", function(event){
    event.preventDefault();
    // console.log(`\nbutton clicked\n`)
    wikiSearch("Eva Hart");
});
$("#jl").on("click", function(event){
    event.preventDefault();
    // console.log(`\nbutton clicked\n`)
    wikiSearch("Joseph Laroche");
});
$("#ta").on("click", function(event){
    event.preventDefault();
    // console.log(`\nbutton clicked\n`)
    wikiSearch("Thomas Andrews");
});
$("#dp").on("click", function(event){
    event.preventDefault();
    // console.log(`\nbutton clicked\n`)
    wikiSearch("Deadpool");
});