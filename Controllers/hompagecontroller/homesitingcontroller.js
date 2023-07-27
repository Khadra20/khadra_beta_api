const express=require('express')
const homsitmodel=require('../../Schema/Homepageschema/homesitting')
const Joi = require('joi');

const xogtahel=async(req,res)=>{
    try {
        const xogta=await homsitmodel.find();
        res.json(xogta)
    } catch (error) {
        console.log(error.message)
    }
}
const postxogta=async(req,res)=>{
    try {
        const updatexogta=homsitmodel(req.body)
        await updatexogta.save();
        res.status(201).json("waala xareeyey xogta")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
function xogtavalidation(updatexogta){
  const xogval=Joi.object({
    name:Joi.string().required(),
    title:Joi.string().required(),
    logo:Joi.string().required()
  })
  return xogval.validate(updatexogta)
}

const putxog=async(req,res)=>{
    try {
        const {id}=req.params;
    const updatedata=await homsitmodel.findByIdAndUpdate(id,req.body,{new:true})
    res.json("waala update gareeye xogta" )
    } catch (error) {
        console.log(error.message)
    }
    
}
const daleted=async(req,res)=>{
    try {
        const daleteddata=await homsitmodel.findByIdAndDelete(req.params.myid)
        res.json(daleteddata)
    } catch (error) {
        
    }
}
exports.xogtahel=xogtahel;
exports.postxogta=postxogta
exports.putxog=putxog
exports.daleted=daleted;