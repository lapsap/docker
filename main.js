var express = require('express');
var app = express();

app.get('/', function (req, res) {
	  console.log("visit /");
	    res.send('Hello World!');
});

app.get('/ak', function (req, res) {
	  console.log("visit /ak");
	    res.send('Hello AK!');
});

app.get('/xavier', function (req, res) {
	  console.log("visit /xavier");
	    res.send('Hello Zhi Hao!');
});

app.get('/xavier_full', function (req, res) {
	  console.log("visit /xavier_full");
	    res.send('Hello Xavier Liew!');
});

app.listen(5000, function () {
	  console.log('Example app listening on port 5000!');
});
