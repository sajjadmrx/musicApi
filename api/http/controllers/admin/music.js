const fs = require('fs');
const path = require('path');

// parent 
const controllers = require('../controller')


// Models 
const musicModel = require('../../../models/music')

class music extends controllers {

    async addMusic(req, res, next) {

        const validator = await this.checkValidator(req)

        if (!validator.isOk)
            return res.json({ success: false, message: validator.message, code: 400 })


        const { artis, nameMusic, cover, music } = req.body;

        let newMusic = new musicModel({
            artis,
            nameMusic,
            cover: path.join(cover),
            music: path.join(music)
        })
        newMusic = await newMusic.save()
        req.body.musicID = newMusic._id
        res.json({
            success: true, message: 'با موفقیت اپلود شد', code: 200, data: {
                ...req.body
            }
        })
        // fs.createReadStream(req.file).pipe(res);
    }


}


module.exports = new music();