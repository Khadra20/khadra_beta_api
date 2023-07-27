const express=require('express')
const { default: mongoose } = require('mongoose')
const Homestingschema=mongoose.Schema({
    name:{type:String,required:true},
    title:{type:String,required:true},
    logo:{type:String,required:true},
    description:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    whatapp:{type:String},
    facebook:{type:String,required:true},
    instagram:{type:String,required:true},
    tiktok:{type:String,required:true},
    Herotitle:{type:String,required:true},
    HeroDiscritpion:{type:String,required:true},
    heroimage:{type:String,required:true},
    Footertext:{type:String,required:true},
    
})
const homsitmodel=mongoose.model('homesit',Homestingschema)
module.exports=homsitmodel