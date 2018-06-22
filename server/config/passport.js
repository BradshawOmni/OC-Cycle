var GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleKeys = require('./config').google;

const mongoose = require('mongoose'); 
//load user mmodel
const User = mongoose.model('users');


module.exports = (passport) => {
    // Google Oauth Strategy
        passport.use('google', new GoogleStrategy({
            clientID: googleKeys.clientId,
            clientSecret: googleKeys.clientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true
        }, ( accessToken, refreshToken, profile, done) =>  {
            // console.log('accessToken', accessToken);
            // console.log('refreshToken', refreshToken);
            console.log('Profile', profile);
            const image = profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'));
            const newUser = {
                googleID: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value,
                image: image
            }

            User.findOne({
                googleID: profile.id
            }).then(user => {
                if(user) {
                       done(null, user); 
                } else {
                    //Create User 
                    new User(newUser)
                        .save()
                        .then(user => {
                            done(null, user);
                        });
                }
            })
            console.log(image);

            // Check for existing users
        }));

}
