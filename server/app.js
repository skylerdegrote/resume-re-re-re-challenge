var express = require("express");
var path = require("path");
var app = express();

app.set("port", (process.env.PORT || 5000));
app.get("/data-request", function (request, response){
    response.json({message:"hello"});
});

app.get("/*", function(request, response){
    var file = request.params[0]||"views/index.html";
    response.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Server is up! Port: " + app.get("port"));
});