"use strict";

const User = require("./../models/users");
const config = require("./../../../config");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bluebird = require('bluebird');
const saltRounds = 10;

mongoose.Promise = Promise;

exports.params = (req, res, next, id) => {
    User.findById(id)
        .then( user => {
            if (user) {
                req.user = user;
                next();
            } else {
                res.json({
                    "message": "User not found"
                });
            }
        })
        .catch( err => {
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
exports.all = (req, res, next) => {
            User.find()
            .then( users => {
                res.json(users);
            })
            .catch( err => {
                next(new Error(err));
            });      
};

exports.post = (req, res, next) => {
    let body = req.body;
    const password = bcrypt.hashSync(body.password, saltRounds);
    body.password = password;
    const user = new User(body);
    
    user.save()
        .then( newuser => {
            res.json(newuser);
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.get = (req, res, next) => {
    const user = req.user;
    res.json(user);
};


exports.logout = (req, res, next) => { 
    
    
};

exports.login = (req, res, next) => { 
    
     User.findOne({
            email: req.body.email}, 
            function(err, user) {
            if (err) throw err;
            if (!user) {
              res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {
           
              if (bcrypt.compareSync(req.body.password, user.password)) {
                
                const token = jwt.sign(user, config.secret);
                res.json({
                  success: true,
                  message: 'Access granted',
                  token: token
                });
              } 
              else {
                res.json(
                    { 
                        success: false, 
                        message: 'Authentication failed. Wrong password.'
                    });
                }   
            }
          });
};

exports.put = (req, res, next) => {
    User.findOneAndUpdate({
        email:req.body.email},req.body,
        function(err,user){
            if(err) throw err;
            if(!user){
                res.json({success:false,message:"Usuario inexistente"});
            }
            else{
                res.status(200).send({success:true,message:"Usuario actualizado"});
            }
        });
};

exports.delete = (req, res, next) => { 
    User.findOne({email:req.body.email},
    function(err,user){
        if(err) console.log("error findOne"+err);
        if(!user){
            res.json({success:false,message:"Usuario inexistente"});
        }
        else{
            user.remove();
            res.status(200).send({success:true,message:"Usuario eliminado"});
        }
    });
};

