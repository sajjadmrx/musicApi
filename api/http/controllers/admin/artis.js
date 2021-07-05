const fs = require('fs');
const path = require('path');
const ms = require('ms')
// parent 
const controllers = require('../controller')


// Models 
const artisModel = require('../../../models/artis')

class artisClass extends controllers {

    async addArtis(req, res, next) {

        try {
            const validator = await this.checkValidator(req)

            if (!validator.isOk)
                return res.json({ success: false, message: validator.message, code: 400, data: [] })


            const { nameEnglish, nameFarsi, bio, avatar } = req.body

            const artis = await artisModel.findOne({

                $or: [
                    {
                        'artisName.english': nameEnglish,
                    },
                    { 'artisName.farsi': nameFarsi }
                ]

            })
            if (artis)
                return res.status(400).json({
                    success: false, code: 400, message: 'یک هنرمند با این مشخصات قبلا ثبت شده است', data: req.body
                })



            let newArtis = await new artisModel({
                'artisName.english': nameEnglish,
                'artisName.farsi': nameFarsi,
                bio,
                avatar: path.join(avatar)
            })
            await newArtis.save()
            req.body.artisID = newArtis._id
            res.json({
                success: true, message: 'با موفقیت اپلود شد', code: 200, data: {
                    ...req.body
                }
            })



        } catch (error) {
            console.log(error);
        }
    }



}


module.exports = new artisClass();