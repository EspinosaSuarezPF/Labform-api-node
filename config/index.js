"use strict";
//Nombre db: labdb
//Activar mongodb /usr/bin/mongod --dbpath=data --port=27017 --nojournal 2>&1 &
//Repair mongodb /usr/bin/mongod --dbpath=data --repair
const config = {
    hostname: "127.0.0.1",
    port: 27017,
    db: {
        url: "mongodb://default:defaultpassword@ds235609.mlab.com:35609/labdb"
    },
    secret: "prueba123",
};

module.exports = config;