const express=require('express');
const aboutmodel=require('../Schema/about')


       //  GET  CONTROLLER
   
const aboutget=async(req,res)=>{
try {
    const aboute=await aboutmodel.find().sort({_id:-1}).limit(1);
    res.status(200).send(aboute)
} catch (error) {
    // console.log(error.message)
    res.status(409).send(error.message)
}
} 
    //   POST CONTROLLER
const aboutpost=async(req,res)=>{
    try {
        const aboutdata=aboutmodel(req.body)
        await aboutdata.save();
        res.status(201).send("waala xareeyey")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const aboutput=async(req,res)=>{
    try {
        const {id}=req.params;
        const abouteupdate=await aboutmodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send( {message:"waa la updategareeyey"})

    } catch (error) {
        res.status(409).send(error.message)
    }
}
const aboutdel=async(req,res)=>{
    try {
        const deletedabout=await aboutmodel.findByIdAndDelete(req.params.mid);
        res.status(200).send(deletedabout)
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const aboutbyid=async(req,res)=>{
    try {
        const id=req.params.id
        const data=aboutmodel.findById(id)
        res.status(200).json({Details:about})
    } catch (error) {
        console.log(error.message)
    }
}
exports.aboutget=aboutget
exports.aboutpost=aboutpost
exports.aboutput=aboutput
exports.aboutdel=aboutdel
exports.aboutbyid=aboutbyid