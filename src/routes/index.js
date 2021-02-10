const indexRouter = require('express').Router();
const authRoute = require('./auth');
const listRoute = require('./list');

indexRouter.use('/auth', authRoute);
indexRouter.use('/list', listRoute);

module.exports = indexRouter;