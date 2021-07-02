const express = require('express')
const router = express.Router();

//Routers
const addMusic = require('./addMusic');


router.use('/addMusic', addMusic)

module.exports = router;