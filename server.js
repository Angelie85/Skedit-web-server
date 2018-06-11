const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const path = require('path');
const PORT = process.env.PORT || 5000

//connect mongoDB
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,  // cookie is set to last 30 days before cookie expire
    keys: [keys.cookieKey]   // key to encrypt our cookie ; It is an array so it will randomly pick a key to encrypt cookie
  })
)

// tell passport it should make use of cookies
app.use(passport.initialize());
app.use(passport.session());


var middleware = require('./middleware.js');

app.use(middleware.logger);


//routes
require ('./routes/authRoutes')(app);


// TODO: test and to be removed
app.get('/aboutus', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));
}
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));


// app.get('/', function(req, res){
//   res.send("Hello Express!")
// })

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });
//


// app.get('/', function(req, res){
//   res.send("Hello Express!")
// })

app.listen(PORT, ()=>{
  console.log(`Skedit-web-server listening on port ${PORT}`)
})
