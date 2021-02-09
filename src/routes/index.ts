const indexRouter = require('express').Router();
const authRoute = require('./auth');

indexRouter.use('/auth', authRoute);

module.exports = indexRouter;