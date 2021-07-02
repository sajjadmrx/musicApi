const express = require('express')
const router = express.Router();




//routers
const adminRoutes = require('./admin')


router.get('/', (req, res) => {

    res.json({ success: true, code: 200, data: { message: 'Hello World' } })
})


router.use('/admin', adminRoutes)


module.exports = router;