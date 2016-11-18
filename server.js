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
	var Comments = require("./app/models/comments.js").Comments;
	var Posts = require("./app/models/posts.js").Posts;
	var Users = require("./app/models/user.js").Users;


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});