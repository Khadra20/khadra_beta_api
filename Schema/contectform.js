const express=require('express')
const { default: mongoose } = require('mongoose')
const contectformschema=mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    message:{type:String,required:true}
});
const contectmodel=mongoose.model('contect',contectformschema)
module.exports=contectmodel