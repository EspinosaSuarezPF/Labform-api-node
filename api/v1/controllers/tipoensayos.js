"use strict";
const config = require("./../../../config");
const jwt = require('jsonwebtoken'); 
const TipoEnsayo = require("./../models/tipoensayos");

exports.post = (req,res,next)=>{
    let body= req.body;
    //body.question= JSON.stringify(body.question);
    
    const tipoensayo = new TipoEnsayo(body);
    tipoensayo.save()
    .then( newtipoensayo => {
            res.json(newtipoensayo);
        })
        .catch( err => {
            next(new Error(err));
        });
};
exports.get = (req,res,next)=>{
    TipoEnsayo.Find()
    .then(tiposensayo=>{
        res.json(tiposensayo);
    })
    .catch(err=>{
        next(new Error(err));
    });
};
exports.put = (req,res)=>{
    
};
exports.delete = (req,res)=>{
    
};

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