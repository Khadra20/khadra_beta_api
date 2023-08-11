const express =require('express')
const { default: mongoose } = require('mongoose')
const Userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,
    required:true},
    password:{type:String,
        required:true},
    userStatus:{
        type:String,
        default:"active",
        enum:["active","pending","blocked"]
    },
    roll:{type:String,
        required:true, 
        enum:["admin","customercare","user"]},
})
const usermodel=mongoose.model("User",Userschema)
module.exports =usermodel