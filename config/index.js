"use strict";
//Nombre db: labdb
//Activar mongodb /usr/bin/mongod --dbpath=data --port=27017 --nojournal 2>&1 &
//Repair mongodb /usr/bin/mongod --dbpath=data --repair

const mongoose = require("mongoose");
const bluebird = require('bluebird');
mongoose.Promise = bluebird;


const config = {
    hostname: "127.0.0.1",
    port: 27017,
    db: {
        url: "mongodb://localhost/labdb"
    },
    secret: "prueba123",
};

//module.exports = config;
mongoose.connect(config.db.url, { useMongoClient: true });
module.exports = { mongoose }