const router = require('express').Router();
const apiUserRoutes = require('./api.user.routes');
const apiLibraryRoutes = require('./api.library.routes')
const apiBookRoutes = require('./api.book.routes')


router.use('/user', apiUserRoutes)
router.use('/library', apiLibraryRoutes)
router.use('/book', apiBookRoutes)

module.exports = router