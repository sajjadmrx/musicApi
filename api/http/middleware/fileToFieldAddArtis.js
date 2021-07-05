const middleware = require('./middleware');

class fileToField extends middleware {
    handel(req, res, next) {
        try {

            if (!req.file) {
                req.body.avatar = null
                return next();
            }


            req.body.avatar = req.file.destination.slice(35) + '/' + req.file.filename


            next();



        } catch (error) {
            next(error)
        }
    }
}

module.exports = new fileToField()