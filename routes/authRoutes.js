const passport = require('passport');

module.exports = (app)=> {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
  );

  app.get('/api/logout', (req, res)=>{
    // logout is a function that is attached automatically to the request object by passport
    // When this is called it takes the cookie that contain our userID and it kills the id that is in there.
    req.logout();
    res.send(req.user);
  })

  app.get('/api/current_user', (req, res)=>{
    // res.send(req.session);
    res.send(req.user)
  })
}