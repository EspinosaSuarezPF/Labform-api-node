"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const TipoEnsayoModel = new Schema({
    name:{
        type:String,
        required:true
    },
    question:{
        type:[Object],
        required:true
        
    }
});

module.exports = mongoose.model("tipoensayo",TipoEnsayoModel);