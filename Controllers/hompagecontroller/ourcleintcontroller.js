const express=require('express');
const ourmodel=require('../../Schema/Homepageschema/ourcleint')


       //  GET  CONTROLLER
   
const getour=async(req,res)=>{
try {
    const our=await ourmodel.find();
    res.status(200).json(our)
} catch (error) {
    res.status(409).send(error.message)
}
} 
    //   POST CONTROLLER
const postour=async(req,res)=>{
    try {
        const ourdata=ourmodel(req.body)
        await ourdata.save();
        res.status(201).json("waala xareeyey")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const putour=async(req,res)=>{
    try {
        const {id}=req.params;
        const updateour=await ourmodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json( {message:"waa la updategareeyey"})

    } catch (error) {
        res.status(409).send(error.message)
    }
}
const ourdel=async(req,res)=>{
    try {
        const delour=await ourmodel.findByIdAndDelete(req.params.mid);
        res.status(200).json(delour)
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const ourbyid=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await ourmodel.findById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(409).send(error.message)
    }
}
exports.getour=getour
exports.postour=postour
exports.putour=putour
exports.ourdel=ourdel
exports.ourbyid=ourbyid