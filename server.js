GLOBAL.package  = require('./package.json');
var express = require("express");

var app = express();
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
	console.log( package.name + " app is running at localhost:" + app.get('port'));
});
module.exports = app;
