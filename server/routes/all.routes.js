const router = require('express').Router();
const apiUserRoutes = require('./api.user.routes');
const apiLibraryRoutes = require('./api.library.routes')


router.use('/user', apiUserRoutes)
router.use('/library', apiLibraryRoutes)


module.exports = router