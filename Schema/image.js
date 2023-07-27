const express =require('express')
const { default: mongoose } = require('mongoose')
const Imageschema=new mongoose.Schema({
     Homeid:{type:mongoose.Types.ObjectId,required:true,ref:'Home'} ,
     imageurl:{type:String,required:true}
})

const imagemodel=mongoose.model('image',Imageschema)
module.exports=imagemodel