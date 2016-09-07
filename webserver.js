var express = require('express');

var app = express();

app.use('/' , express.static(__dirname + '/'));


app.get('/about', function(req, res){
    res.sendFile('about.html');
});
app.get('/projects', function(req, res){
    res.sendFile('projects.html');
});
app.listen(8080, function(){
    console.log("listenting on http://localhost:8080");
});