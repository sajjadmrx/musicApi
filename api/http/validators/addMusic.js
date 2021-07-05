const { check } = require('express-validator/check')
const path = require('path')
class checkFormat {

    handel = () => {

        return [
            check('cover').custom((value, { req }) => {

                if (!value)
                    throw new Error('وارد کردن یک کاور(تصویر) الزامیست.');
                const extFile = ['.png', '.jpg', '.jpeg', '.svg', '.PNG', '.JPG']
                if (!extFile.includes(path.extname(value)))
                    throw new Error('فرمت  کاور(تصویر) مجاز نیست.')
                return true
            }),
            check('music').custom((value, { req }) => {
                if (!value)
                    throw new Error('وارد کردن فایل موزیک الزامیست.');
                const extFile = ['.mp3']
                if (!extFile.includes(path.extname(value)))
                    throw new Error('فرمت  موزیک مجاز نیست.')
                return true
            })
        ]
    }
}


module.exports = new checkFormat();