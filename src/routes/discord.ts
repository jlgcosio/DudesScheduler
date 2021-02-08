const discordRouter = require('express').Router();

discordRouter.get('/', (req, res) => {
	res.sendStatus(200);
});

module.exports = discordRouter;