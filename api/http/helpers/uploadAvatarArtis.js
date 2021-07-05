const multer = require('multer')
const mkd = require('mkdirp')
const fs = require('fs');
const path = require('path');


const extFile = ['image/jpeg', 'image/png']

const getAddressDrArtis = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth()
    const day = new Date().getDay();
    return path.resolve(`./public/uploads/artis/${year}/${month}/${day}`)


}


const ImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {

        if (extFile.includes(file.mimetype)) {
            mkd.sync(getAddressDrArtis())
            cb(null, getAddressDrArtis())
        }

    },
    filename: (req, file, cb) => {

        const pathCover = getAddressDrArtis() + `/${file.originalname}`

        if (extFile.includes(file.mimetype)) {
            if (!fs.existsSync(pathCover))
                cb(null, file.originalname)
            else
                cb(null, Date.now() + `-${file.originalname}`)
        }







    }
})


const uploadImage = multer({
    storage: ImageStorage
});
module.exports = uploadImage