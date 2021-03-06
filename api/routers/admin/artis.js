const express = require('express')
const router = express.Router();


//uploadFile 
const upload = require('../../http/helpers/uploadAvatarArtis')


//controllers
const adminArtis = require('../../http/controllers/admin/artis')


//middleware 
const fileToField = require('../../http/middleware/fileToFieldAddArtis')

//Validator 
const checkAddArtis = require('../../http/validators/addArtis')


router.post('/add',
    upload.single('avatar'),
    fileToField.handel,
    checkAddArtis.handel(),
    adminArtis.addArtis
)

module.exports = router;