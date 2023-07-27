const express=require('express')
const imagemodel=require('../Schema/image');

const imageget=async(req,res)=>{
    try {
        const getimage=await imagemodel.find().populate({
            path: "Homeid",
            model: "Home",
            select: 'rent deposite address' 
        });
        res.json(getimage)
    } catch (error) {
        console.log(error.message)
    }
}
const imgpost=async(req,res)=>{
    try {
        const imgupdate=imagemodel(req.body);
        await imgupdate.save();
        res.status(201).json("image has been inserted")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const imageput=async(req,res)=>{
    try {
        const {id} = req.params;
    const updateimage= await imagemodel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json("updtated")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const imagedeleted=async(req,res)=>{
    try {
        const imagedelet=await imagemodel.findByIdAndDelete(req.params.mid)
        res.status(200).json("deleted")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
 
const getxog=async(req,res)=>{
    try {
        const id=req.params.id
        const data=imagemodel.findById(id)
        res.json({Details:image})
    } catch (error) {
        console.log(error.message)
    }
}
exports.imageget=imageget;
exports.imgpost=imgpost
exports.imageput=imageput
exports.imagedeleted=imagedeleted
exports.getxog=getxog