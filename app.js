// index.js 파일

const express = require("express");
const http = require("http");
var template = require('./templates/index2.js');
var path = require('path');
const bodyParser = require("body-parser");
const app = express();
app.use('/', express.static("./"))
// app.use(express.static(path.join(__dirname, 'public')));
app.get("", (req, res) => {
     res.sendFile(__dirname +"/templates/main.html")
});
app.get("/test", (req, res) => {
     res.sendFile(__dirname +"/templates/test.html")
});
app.get("/result", (req, res) => {
      var html = template.HTML(req.query.max, req.query.min);
       res.send(html);
});
app.get("/details", (req, res) => {
     res.sendFile(__dirname +"/templates/popup0.html")
});

app.listen(process.env.PORT|| 3000, function () {
  console.log('Example app listening on port 3000!')
});
