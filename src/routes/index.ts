const indexRouter = require('express').Router();
const authRoute = require('./auth');

indexRouter.use('/stuff', authRoute);

module.exports = indexRouter;