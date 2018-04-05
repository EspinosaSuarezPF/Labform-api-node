"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const EnsayoModel = new Schema({
    campos:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("ensayo",EnsayoModel);