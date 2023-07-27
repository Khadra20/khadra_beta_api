const express=require('express')
const contectmodel=require('../Schema/contectform')
//   GET METHOD
const contectformget=async(req,res)=>{
    try {
        const contect=await contectmodel.find();
        res.status(200).json(contect)
    } catch (error) {
        res.status(409).send(error.message)
    }
}
//    POST METHOD
const postform=async(req,res)=>{
    try {
        const contectpost=contectmodel(req.body)
        await contectpost.save();
        res.status(201).send(contectpost)
    } catch (error) {
        res.status(409).send(error.message)
    }
}

    // PUT METHOD

     const putform=async(req,res)=>{
      try {
        const {id}=req.params;
        const contectput=await contectmodel.findByIdAndUpdate(id,req.body,{new:true})
        res.json(contectput)
      } catch (error) {
        console.log(error.message)
      }  
     }
        // DELETE METHOD
     const deleted=async(req,res)=>{
        try {
            const deledcontect=await contectmodel.findByIdAndDelete(req.params.mid)
            res.status(200).send()(deledcontect)
        } catch (error) {
            
        }
     }
     exports.contectformget=contectformget
     exports.postform=postform;
     exports.putform=putform,
     exports.deleted=deleted