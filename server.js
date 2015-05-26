GLOBAL.package  = require('./package.json');
var express = require("express");

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

if (require.main === module) {
  app.listen(app.get('port'), function() {
    console.log( package.name + " app is running at localhost:" + app.get('port'));
  });
} else {
  module.exports = app;
}