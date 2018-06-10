const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// "User" is a model class
const User = mongoose.model('users');

// call serializeUser with the user to generate the identifying piece of info
// "user" is a user model instance, it is a mongoose model
passport.serializeUser((user, done)=>{
  // unique id generate by mongo for the user who login in
  done(null, user.id);

});

// "id" will need to turn into a mongoose model instance
passport.deserializeUser((id, done)=>{
  User.findById(id)
    .then(user =>{
      done(null, user);
    })
});

// ask passport to use the passport strategy while creating new instance of google passport strategy
passport.use(
  new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done)=>{
      console.log('accessToke: '+accessToken);
      console.log('refreshToken: '+refreshToken);
      console.log('profile: '+JSON.stringify(profile));

      User.findOne({ googleId:profile.id })
        .then((existingUser)=>{
          if(existingUser){
            //we already have a record with the given profileId
            done(null, existingUser)
          }else{
            // we dont' have a user record with thtis ID, make a new record
            new User({
              googleId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value
            }).save()
              .then(user=> done(null, user))
          }
        })



    })
);

