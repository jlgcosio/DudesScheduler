var discordStrategyPassport = require('passport');
var DiscordStrategy = require('passport-discord').Strategy;

// User model
var User = require('../models/user');

// Oauth scopes
const oauthScopes = ['identify', 'guilds'];

discordStrategyPassport.serializeUser((user, cb) => {
    cb(null, user.discordID);
})

discordStrategyPassport.deserializeUser(async (discordID, cb) => {
    try {
        const user = await User.findOne({
            discordID
        });
        if (user) {
            cb(null, user);
        } else {
            cb(null, null);
        }
    } catch (error) {
        cb(error, null);
    }
});


// Passport authentication strategy
discordStrategyPassport.use(new DiscordStrategy({
    clientID: process.env.APP_CLIENT_ID,
    clientSecret: process.env.APP_CLIENT_SECRET,
    callbackURL: process.env.OAUTH_CALLBACK_URL,
    scope: oauthScopes
}, async (accessToken, refreshToken, profile, cb) => {
    const {
        id,
        username,
        discriminator,
        guilds
    } = profile;
    try {
        const userObject = await User.findOneAndUpdate({
            discordID: id
        }, {
            discordID: id,
            discordTag: `${username}#${discriminator}`,
            guilds,
            accessToken,
            refreshToken
        }, {
            new: true
        });

        if (userObject) {
            console.log('User profile taken');
            return cb(null, userObject)
        } else {
            const newUser = await User.create({
                discordID: id,
                discordTag: `${username}#${discriminator}`,
                guilds,
                accessToken,
                refreshToken
            });
            return cb(null, newUser);
        }
    } catch (error) {
        console.log(error);
        return cb(error, null);
    }

}));