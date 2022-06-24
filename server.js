// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/aboutme", function(request, response) {
  response.sendFile(__dirname + "/views/aboutme.html");
});

app.get("/Unit1", function(request, response) {
  response.sendFile(__dirname + "/views/Unit1.html");
});


app.get("/Unit2", function(request, response) {
  response.sendFile(__dirname + "/views/Unit2.html");
});

app.get("/Unit3", function(request, response) {
  response.sendFile(__dirname + "/views/Unit3.html");
});

app.get("/samples", function(request, response) {
  response.sendFile(__dirname + "/views/samples.html");
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
