var express = require('express');
var app = express();

const PORT = process.evn.PORT || 5000

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/aboutus', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send("Hello Express!")
})

app.listen(PORT, ()=>{
  console.log(`Skedit web server listenin on port ${PORT}`)
})
