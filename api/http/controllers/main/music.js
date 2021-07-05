const fs = require('fs');
const path = require('path');

// parent 
const controllers = require('../controller')


// Models 
const musicModel = require('../../../models/music')

class music extends controllers {


    async getMusicList(req, res, next) {
        const page = req.query.page || 1
        // const filter = req.query.filter || 'all'
        // if(filer)
        const musicList = await musicModel.paginate({}, {
            limit: 5, page, populate: {
                path: 'artis',
                select: ['artisName', 'avatar']
            }
        })
        res.json({ success: true, code: 200, message: 'ok', data: musicList })
    }
}


module.exports = new music();