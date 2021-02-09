const authRouter = require('express').Router();
const authPassport = require('passport');

// Oauth2 routes
authRouter.get('/authenticate', authPassport.authenticate('discord'));

authRouter.get('/authenticate/redirect', authPassport.authenticate('discord'), (req, res) => {
	console.log(res);
	res.sendStatus(200);
})

module.exports = authRouter;