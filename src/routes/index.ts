const indexRouter = require('express').Router();
const discord = require('./discord');

indexRouter.use('/stuff', discord);

module.exports = indexRouter;