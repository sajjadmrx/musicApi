const autoBind = require('auto-bind');
const { validationResult } = require('express-validator')
const path = require('path')
const fs = require('fs')
class controllers {


    constructor() {
        autoBind(this)

    }
    async checkValidator(req) {
        const validator = await validationResult(req)
        const err = validator.array();

        const messages = []
        err.map(item => messages.push(item.msg))

        if (messages.length == 0)
            return { isOk: true }

        if (req.body.music && req.body.music != null)
            fs.unlinkSync(path.resolve(`./public/${req.body.music}`))
        if (req.body.cover && req.body.cover != null)
            fs.unlinkSync(path.resolve(`./public/${req.body.cover}`))



        return { isOk: false, message: messages }
    }

}


module.exports = controllers