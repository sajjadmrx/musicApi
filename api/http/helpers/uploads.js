const multer = require('multer')
const mkd = require('mkdirp')
const fs = require('fs');
const path = require('path');




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
        else if (file.mimetype == 'image/jpeg') {
            // if (!fs.existsSync(pathCover))
            //     cb(null, path.resolve('/'))
            // else
            //     cb(null, Date.now() + `-${file.originalname}`)
            mkd.sync(getAddressDrCover())
            cb(null, getAddressDrCover())
        }
        else {
            console.log(file.mimetype)
            cb({ error: 'Mime type not supported' })
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
        else if (file.mimetype == 'image/jpeg') {
            if (!fs.existsSync(pathCover))
                cb(null, file.originalname)
            else
                cb(null, Date.now() + `-${file.originalname}`)
        }
        else {
            console.log(file.mimetype)
            cb({ error: 'Mime type not supported' })
        }






    }
})


const uploadImage = multer({
    storage: ImageStorage
});
module.exports = uploadImage