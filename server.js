var express = require('express');
var app = express();
const path = require('path');

const PORT = process.env.PORT || 5000


var middleware = require('./middleware.js');

app.use(middleware.logger);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/aboutus', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.send("Hello Express!")
// })

app.listen(PORT, ()=>{
  console.log(`Skedit web server listenin on port ${PORT}`)
})
