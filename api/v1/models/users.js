"use strict";

const mongoose = require("mongoose");
//const bluebird = require('bluebird');
const Schema = mongoose.Schema;

//mongoose.Promise = bluebird;

const UserModel = new Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tipo:{
        type:String,
        required:true,
        default:"default"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserModel);