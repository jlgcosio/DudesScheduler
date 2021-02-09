var discordStrategyPassport = require('passport');
var DiscordStrategy = require('passport-discord');

const oauthScopes = ['identify', 'guilds'];

discordStrategyPassport.use(new DiscordStrategy({
    clientID: process.env.APP_CLIENT_ID,
    clientSecret: process.env.APP_CLIENT_SECRET,
    callbackURL: process.env.OAUTH_CALLBACK_URL,
    scope: oauthScopes
}, (accessToken, refreshToken, profile, cb) => {
    console.log("Access Token: ", accessToken);
    console.log("Refresh Token:", refreshToken);
    console.log(profile);
}));