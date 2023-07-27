
 
// mesha laga maamulaayo xogta userka oo dhan

const express=require('express')
const usermodel=require('../Schema/userschema');
const Joi = require('joi');
  
// xogta userka in la helo
const getuser=async(req,res)=>{
    try {
        const updateget=await usermodel.find();
        res.json(updateget)
    } catch (error) {
        res.json(error)
    }
}
//    qeebta signupka userka
const signup=async(req,res)=>{
    try {
        const updatepost=usermodel(req.body)
        await updatepost.save();
        res.json("data haas been saved")
    } catch (error) {
        res.json(error)
    }
}
function uservalidation(updatepost){
    let userval=Joi.object({
        name:Joi.string().required(),
        password:Joi.string().required().max(6)
    })
    return userval.validate(updatepost)

}
exports.getuser=getuser;
exports.signup=signup; 
