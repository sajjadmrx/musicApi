const express = require('express')
const router = express.Router();


//uploadFile 
const upload = require('../../http/helpers/uploads')


//controllers
const addMusic = require('../../http/controllers/admin/addMusic')

//middleware 
const fileToField = require('../../http/middleware/fileToField')

//Validator 
const checkFormat = require('../../http/validators/addMusic')


router.post('/upload', upload.any(), fileToField.handel, checkFormat.handel(), addMusic.handel)

module.exports = router;