const router = require('express').Router();
const apiUserRoutes = require('./api.user.routes');


router.use('/user', apiUserRoutes)


module.exports = router