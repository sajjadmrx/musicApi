const express = require('express')
const router = express.Router();


//uploadFile 
const upload = require('../../http/helpers/uploadMusic')


//controllers
const music = require('../../http/controllers/admin/music')

//middleware 
const fileToField = require('../../http/middleware/fileToFieldAddMusic')

//Validator 
const checkFormat = require('../../http/validators/addMusic')


router.post('/upload', upload.any(), fileToField.handel, checkFormat.handel(), music.addMusic)

module.exports = router;