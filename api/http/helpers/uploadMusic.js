const multer = require('multer')
const mkd = require('mkdirp')
const fs = require('fs');
const path = require('path');


const extFile = ['image/jpeg', 'image/png']

const getAddressDrMusic = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth()
    const day = new Date().getDay();
    return path.resolve(`./public/uploads/music/${year}/${month}/${day}`)


}
const getAddressDrCover = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth()
    const day = new Date().getDay();
    return path.resolve(`./public/uploads/covers/${year}/${month}/${day}`)


}

const ImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {

        if (file.mimetype === 'audio/mpeg') {
            mkd.sync(getAddressDrMusic())
            cb(null, getAddressDrMusic())
        }
        else if (extFile.includes(file.mimetype)) {
            mkd.sync(getAddressDrCover())
            cb(null, getAddressDrCover())
        }

    },
    filename: (req, file, cb) => {
        const musicPath = getAddressDrMusic() + `/${file.originalname}`
        const pathCover = getAddressDrCover() + `/${file.originalname}`


        if (file.mimetype === 'audio/mpeg') {
            if (!fs.existsSync(musicPath))
                cb(null, file.originalname)
            else
                cb(null, Date.now() + `-${file.originalname}`)
        }
        else if (extFile.includes(file.mimetype)) {
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