const express = require('express')
const router = express.Router();


//uploadFile 
const upload = require('../../http/helpers/uploadMusic')


//controllers

const mainMusic = require('../../http/controllers/main/music')
//middleware 
const fileToField = require('../../http/middleware/fileToFieldAddMusic')

//Validator 
const checkFormat = require('../../http/validators/addMusic')

router.get('/', mainMusic.getMusicList)

module.exports = router;