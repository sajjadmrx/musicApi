const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2')


const artisModel = new mongoose.Schema({

    artiName: { english: { type: String }, farsi: { type: String } },
    // artisCode: { type: String, require: true },
    bio: { type: String, default: 'چیزی نوشته نشده...' },

    avatar: { type: String, require: true },

})

artisModel.plugin(mongoosePaginate)

module.exports = mongoose.model('artis', artisModel)