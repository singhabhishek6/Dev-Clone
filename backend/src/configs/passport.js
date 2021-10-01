const passport = require('passport');

//Passport configs
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2222/auth/google"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        //User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(null, profile);
        //});
    }
));
