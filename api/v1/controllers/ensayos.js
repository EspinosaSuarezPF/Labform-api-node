"use strict";

const config = require("./../../../config");
const jwt = require('jsonwebtoken'); 
const Ensayo = require("./../models/ensayos");

exports.params = (req, res, next, id) => {
    Ensayo.findById(id)
        .then( ensayo => {
            if (ensayo) {
                req.tipoensayo = ensayo;
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
    const ensayo = new Ensayo(body);
    ensayo.save()
    .then( newensayo => {
            res.json(newensayo);
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.all = (req,res,next)=>{
    Ensayo.find()
    .then(ensayo=>{
        res.json(ensayo);
    })
    .catch(err=>{
        next(new Error(err));
    });
};

exports.get = (req,res,next,id)=>{
    Ensayo.findById()
    .then(ensayo=>{
        res.json({ensayo});
    })
    .catch(err => {
        next(new Error(err));
    });
};
exports.put = (req,res,id,next)=>{
Ensayo.findByIdAndUpdate(id,req.body)
    .then(ensayo=>{
        res.json({success:true,message:"Tipo de ensayo actualizado"});
    })
    .catch(err => {
        next(new Error(err));
    });
};
exports.delete = (req,res,id,next)=>{
Ensayo.findByIdAndRemove(id)
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