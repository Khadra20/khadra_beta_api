const express =require('express')
const { default: mongoose } = require('mongoose')
const Userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    status:{type:String,required:true},
    roll:{type:String,required:true},
})
const usermodel=mongoose.model("User",Userschema)
module.exports =usermodel