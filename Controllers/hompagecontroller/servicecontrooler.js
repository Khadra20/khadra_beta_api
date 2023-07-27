const express=require('express');
const servicemodel=require('../../Schema/Homepageschema/service')


       //  GET  CONTROLLER
   
const getservice=async(req,res)=>{
try {
    const aboute=await servicemodel.find();
    res.status(200).json(aboute)
} catch (error) {
    res.status(409).send(error.message)
}
} 
    //   POST CONTROLLER
const postservice=async(req,res)=>{
    try {
        const aboutdata=servicemodel(req.body)
        await aboutdata.save();
        res.status(201).json("waala xareeyey")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const updatedservice=async(req,res)=>{
    try {
        const {id}=req.params;
        const abouteupdate=await servicemodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json( {message:"waa la updategareeyey"})

    } catch (error) {
        res.status(409).send(error.message)
    }
}
const servicedel=async(req,res)=>{
    try {
        const deletservice=await servicemodel.findByIdAndDelete(req.params.mid);
        res.status(200).json(deletservice)
    } catch (error) {
        res.status(409).send(error.message)
    }
}

exports.getservice=getservice
exports.postservice=postservice
exports.updatedservice=updatedservice
exports.servicedel=servicedel
