const fs = require('fs');
const path = require('path');
const ms = require('ms')
// parent 
const controllers = require('../controller')


// Models 
const artisModel = require('../../../models/artis')

class artisClass extends controllers {



    async getAll(req, res, next) {
        try {
            const page = req.query.page || 1;
            const artisList = await artisModel.paginate({}, { page, limit: 5, select: ['artisName', ['avatar']] },)
            res.json({ success: true, code: 200, data: artisList })
        } catch (error) {

        }
    }

}


module.exports = new artisClass();