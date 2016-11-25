var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('education', ['education']);

app.use(express.static(__dirname + "/public"));

app.get('/education', function(req, res) {
    console.log("I received a GET request");

    db.education.find({type: "edu"}, function(err, docs) {
      console.log(docs);
      res.json(docs);
    });

});

app.get('/skills', function(req, res) {
    console.log("I received a GET request");

    db.education.find({type: "skill"}, function(err, docs) {
      console.log(docs);
      res.json(docs);
    });

});

app.get('/projects', function(req, res) {
    console.log("I received a GET request");

    db.education.find({type: "project"}, function(err, docs) {
      console.log(docs);
      res.json(docs);
    });

});




app.listen(8080);
console.log("Server running on port 8080");
