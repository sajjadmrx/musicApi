const { check } = require('express-validator/check')
const path = require('path')
class checkFormat {

    handel = () => {

        return [
            check('avatar').custom((value, { req }) => {

                if (!value)
                    throw new Error('وارد کردن یک پروفایل الزامیست.');
                const extFile = ['.png', '.jpg', '.jpeg', '.svg', '.PNG', '.JPG']
                if (!extFile.includes(path.extname(value)))
                    throw new Error('فرمت  پروفایل مجاز نیست.')
                return true
            }),
            check('nameEnglish').isLength({ max: 20, min: 5 })
                .withMessage('نام هنرمند نباید کمتر از 5 و بیشتر از 20 کاراکتر باشد'),
            check('nameFarsi').isLength({ max: 20, min: 5 })
                .withMessage('نام هنرمند نباید کمتر از 5 و بیشتر از 20 کاراکتر باشد')
        ]
    }
}


module.exports = new checkFormat();