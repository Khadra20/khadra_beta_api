const express=require('express')
const { default: mongoose } = require('mongoose')
const abouteschema=mongoose.Schema({
    faafahinyar:{type:String,required:true},
    faafahin:{type:String,required:true}
})
const aboutmodel=mongoose.model('about',abouteschema)
module.exports=aboutmodel
