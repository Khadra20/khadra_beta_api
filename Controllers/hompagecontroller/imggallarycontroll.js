const express=require('express');
const gallarymodel=require('../../Schema/Homepageschema/imagegallary')


       //  GET  CONTROLLER
   
const gellaryget=async(req,res)=>{
try {
    const aboute=await gallarymodel.find();
    res.status(200).json(aboute)
} catch (error) {
    res.status(409).send(error.message)
}
} 
    //   POST CONTROLLER
const gellarypost=async(req,res)=>{
    try {
        const aboutdata=gallarymodel(req.body)
        await aboutdata.save();
        res.status(201).send("waala xareeyey")
    } catch (error) {
        res.status(409).send(error.message)
    }
}
const gellaryput=async(req,res)=>{
    try {
        const {id}=req.params;
        const abouteupdate=await gallarymodel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send( {message:"waa la updategareeyey"})

    } catch (error) {
        res.status(409).send(error.message)
    }
}
const gellarydel=async(req,res)=>{
    try {
        const deletgallry=await gallarymodel.findByIdAndDelete(req.params.mid);
        res.status(200).json(deletgallry)
    } catch (error) {
        res.status(409).send(error.message)
    }
}

exports.gellaryget=gellaryget
exports.gellarypost=gellarypost
exports.gellaryput=gellaryput
exports.gellarydel=gellarydel
