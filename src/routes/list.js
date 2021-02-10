const listRouter = require('express').Router();

listRouter.get('/', (req, res) => {
    console.log(req);
    res.sendStatus('Hoopla');
});

module.exports = listRouter;