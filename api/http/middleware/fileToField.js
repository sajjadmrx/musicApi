const middleware = require('./middleware');

class fileToField extends middleware {
    handel(req, res, next) {
        try {

            if (!req.files?.length)
                req.files = []

            const cover = req.files.find(fi => fi.fieldname == 'cover')
            const music = req.files.find(fi => fi.fieldname == 'music')
            // req.body = {}         
            if (!req.body)
                req.body = { cover: null, music: null }


            if (!cover)
                req.body.cover = null;
            else {
                req.body.cover = cover.destination.slice(35) + '/' + cover.filename
            }
            if (!music)
                req.body.music = null
            else {
                req.body.music = music.destination.slice(35) + '/' + music.filename
            }




            next()
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new fileToField()