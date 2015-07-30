var express = require("express");
var mongoose = require("mongoose");
var ThingSchema = mongoose.Schema({
    name: String
});

var Thing = mongoose.model("thing", ThingSchema);

var PersonSchema = mongoose.Schema({
    name: String,
    active: { type: Boolean, default: true }
});

var Person = mongoose.model("person", PersonSchema);

mongoose.connect("mongodb://localhost:27017/my_world");

mongoose.connection.on("open", function(){
    console.log("connected");
});

mongoose.connection.on("error", function(err){
    console.log(err);
});

var app = express();
app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});
app.get("/things", function(req, res){
    res.render("index");
});
app.get("/people", function(req, res){
    res.render("index");
});

app.get("/api/things", function(req, res){
   Thing.find({})
    .then(function(things){
        res.send(things); 
    });
});

app.get("/api/people", function(req, res){
   Person.find({})
    .then(function(people){
        res.send(people);
    });
});

app.listen(process.env.PORT);