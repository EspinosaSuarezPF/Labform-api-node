"use strict";

const Ensayo = require("./../models/ensayos");

exports.create = (req,res)=>{
    const ensayo = new Ensayo(req.body);
    ensayo.save();
    res.status(200).send({success:true, message:"Ensayo guardado"})
};
exports.list = (req,res)=>{
    
};
exports.update = (req,res)=>{
    
};
exports.delate = (req,res)=>{
    
};