const express = require('express');
const cors = require("cors");
const passport = require('passport');
const cookieSession = require('cookie-session')
// require('./configs/passport')
require('dotenv').config();
var cookieParser = require('cookie-parser');
const connect = require('./configs/db')
const hasTag = require('./controllers/hashtag.controller');
//express midleware

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
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

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'dev.to profile',
    keys: ['key1', 'key2']
}))
 

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google', passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/good');
    }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})




app.use("/hastag", hasTag);
app.use(cookieParser());
//app.use(auth);

const userController = require('./controllers/user.controller');
app.use('/users', userController);

const postController = require('./controllers/post.controller');
app.use('/posts', postController);

const commentsController = require('./controllers/comments.controller');
app.use('/comments', commentsController);


const start = async () => {
    await connect();
    
    app.listen(process.env.SERVER_PORT, () => {
        console.log('listing on port ' + process.env.SERVER_PORT);
    })
}

module.exports = start;