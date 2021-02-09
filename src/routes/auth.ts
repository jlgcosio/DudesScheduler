const authRouter = require('express').Router();
const authPassport = require('passport');

// Passport authentication
//authPassport.use();


// Oauth2 routes
authRouter.get('/auth', (req, res) => {
	res.sendStatus(200);
});

module.exports = authRouter;