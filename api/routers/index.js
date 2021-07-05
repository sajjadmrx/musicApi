const express = require('express')
const router = express.Router();




//routers
const adminRoutes = require('./admin')
const mainRoutes = require('./main')

router.use(mainRoutes)


router.use('/admin', adminRoutes)


module.exports = router;