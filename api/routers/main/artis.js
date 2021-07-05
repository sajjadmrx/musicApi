const express = require('express')
const router = express.Router();


//uploadFile 
const upload = require('../../http/helpers/uploadAvatarArtis')


//controllers

const mainArtis = require('../../http/controllers/main/artis')

//middleware 
const fileToField = require('../../http/middleware/fileToFieldAddArtis')

//Validator 
const checkAddArtis = require('../../http/validators/addArtis')

router.get('/', mainArtis.getAll)


module.exports = router;