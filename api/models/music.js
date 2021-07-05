const mongoose = require('mongoose');



const musicModel = new mongoose.Schema({

    artis: { type: mongoose.Schema.Types.ObjectId, require: true },
    // artisCode: { type: String, require: true },
    nameMusic: { type: String, require: true },
    cover: { type: String, require: true },
    music: { type: String, require: true },
    liked: { type: Number, default: 0 },
    command: { type: Number, default: 0 },
})



module.exports = mongoose.model('music', musicModel)