const express=require('express')
const  homemodel=require('../Schema/Guryo')
// const imagecontroller =require('../Controllers/imagescontrol')

const gethome=async(req,res)=>{
    try {
        const updehome=await homemodel.find();
        res.json(updehome)
    } catch (error) {
        res.status(409).json(error.message)
    }
}
const homepost=async(req,res)=>{
    try {
        const updatehomepost=homemodel(req.body)
        await updatehomepost.save();
        res.status(200).json( updatehomepost)
    } catch (error) {
        res.status(409).json(error.message)
    }
}
const puthome=async(req,res)=>{
    try {
        const {id}=req.params;
        const updatehome=await homemodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json( {message:"waa la updategareeyey"})

    } catch (error) {
        res.status(409).send(error.message)
    }
}

const homedel=async(req,res)=>{
    try {
        const delhome=await homemodel.findByIdAndDelete(req.params.mid);
        res.status(200).json(delhome)
    } catch (error) {
        res.status(409).send(error.message)
    }
}
exports.gethome=gethome;
exports.homepost=homepost
exports.puthome=puthome
exports.homedel=homedel