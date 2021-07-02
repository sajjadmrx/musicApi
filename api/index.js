const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const fileUpload = require('express-fileupload')
var multer = require('multer');
require("express-validator")
const app = express()
class api {


    constructor() {
        this.setup();
        this.config();
        this.setRouters();
    }
    setup() {
        mongoose.connect(process.env.dataBase, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true })
            .then(a => {
                app.listen(process.env.PORT)
                console.log('started Api..');
            }).catch(console.log)

    }
    config() {
        app.use(bodyParser.json())
        // app.use(fileUpload({
        //     limits: { fileSize: 50 * 1024 * 1024 },
        // }));
    }
    setRouters() {
        app.use(require('./routers'))
    }



}

module.exports = api