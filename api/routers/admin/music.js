const express = require('express')
const router = express.Router();


//uploadFile 
const upload = require('../../http/helpers/uploadMusic')


//controllers
const AdminMusic = require('../../http/controllers/admin/music')

//middleware 
const fileToField = require('../../http/middleware/fileToFieldAddMusic')

//Validator 
const checkFormat = require('../../http/validators/addMusic')


router.post('/upload', upload.any(), fileToField.handel, checkFormat.handel(), AdminMusic.addMusic)

module.exports = router;