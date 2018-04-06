"use strict";

const config = require("./../../../config");
const jwt = require('jsonwebtoken'); 
const TipoEnsayo = require("./../models/tipoensayos");

exports.params = (req, res, next, id) => {
    TipoEnsayo.findById(id)
        .then( tipoensayo => {
            if (tipoensayo) {
                req.tipoensayo = tipoensayo;
                next();
            } else {
                res.json({
                    "message": "Tipo de ensayo no encontrador"
                });
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};
//Revisar el formato de los question
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

exports.all = (req,res,next)=>{
    TipoEnsayo.find()
    .then(tiposensayo=>{
        res.json(tiposensayo);
    })
    .catch(err=>{
        next(new Error(err));
    });
};

exports.get = (req,res,next,id)=>{
    TipoEnsayo.findById()
    .then(tipoensayo=>{
        res.json({tipoensayo});
    })
    .catch(err => {
        next(new Error(err));
    });
};
exports.put = (req,res,id,next)=>{
TipoEnsayo.findByIdAndUpdate(id,req.body)
    .then(tipoensayo=>{
        res.json({success:true,message:"Tipo de ensayo actualizado"});
    })
    .catch(err => {
        next(new Error(err));
    });
};
exports.delete = (req,res,id,next)=>{
TipoEnsayo.findByIdAndRemove(id)
    .then(tipoensayo=>{
        res.json({success:true,message:"Tipo de ensayo eliminado"});
    })
    .catch(err => {
        next(new Error(err));
    });
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