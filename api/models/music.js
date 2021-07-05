const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2')


const musicModel = new mongoose.Schema({

    artis: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'artis' },
    // artisCode: { type: String, require: true },
    nameMusic: { type: String, require: true },
    cover: { type: String, require: true },
    music: { type: String, require: true },
    liked: { type: Number, default: 0 },
    command: { type: Number, default: 0 },
})

musicModel.plugin(mongoosePaginate)

module.exports = mongoose.model('music', musicModel)