var express = require('express');
var http = require('http');

var app = express();
var port = process.env.PORT || 5000;

http.createServer(app).listen(port, function(){
    //console.log("Listening on Port %d", port);
})



//var server = require('http').createServer(app);
//
//server.listen(port, function () {
//    console.log('I\'m listening to port: %d', port);
//    debug("Server is listening at port %d", port);
//});
//
//app.get("/student/:id", function (req, res) {
//    res.end(req.params.id + " rocks!");
//});

app.use(express.static(__dirname + '/www/'));
