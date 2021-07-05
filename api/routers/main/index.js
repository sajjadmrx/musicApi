const express = require('express')
const router = express.Router();

//Routers
const musicRouters = require('./music');
const artisRouters = require('./artis');


router.use('/music', musicRouters)
router.use('/artis', artisRouters)

module.exports = router;