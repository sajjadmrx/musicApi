const fs = require('fs');
const path = require('path');

// parent 
const controllers = require('../controller')

class addMusic extends controllers {

    async handel(req, res, next) {

        const validator = await this.checkValidator(req)

        if (!validator.isOk)
            return res.json({ success: false, message: validator.message, code: 400 })
        res.json({
            success: true, message: 'با موفقیت اپلود شد', code: 200, data: {
                cover: path.join(req.body.cover),
                music: path.join(req.body.music)
            }
        })
        // fs.createReadStream(req.file).pipe(res);
    }


}


module.exports = new addMusic();