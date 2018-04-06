"use strict";
const config = require("./../../../config");
const jwt = require('jsonwebtoken'); 
const TipoEnsayo = require("./../models/tipoensayos");

exports.post = (req,res)=>{
    const tipoensayo = new TipoEnsayo(req.body);
    tipoensayo.save()
    .then( newtipoensayo => {
            res.json(newtipoensayo);
        })
        .catch( err => {
            throw err;
        });
};
exports.get = ()=>{};
exports.put = ()=>{};
exports.delete = ()=>{};

exports.validateToken = (req, res, next) => {
    const token = req.body.token ||  req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 
                    config.secret, 
                    function(err, decoded) {     
                        if (err) {
                            return res.json({ success: false, message: 'Failed to authenticate token.' });    
    
                        } else {
                            next();
                        }
                    });
      } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
      }
};