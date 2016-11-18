var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var fs = require("fs");
var app = express();
app.use(cors());
app.use(bodyParser());
/* ------------------------------------------------------------------------------------------
* Подключаем все коллекций
*/
app.get('/', function(request, response) {
  response.send('Hello World!');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
