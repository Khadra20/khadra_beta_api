const express=require('express')
const { default: mongoose } = require('mongoose')
const serviceschema=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    icon:{type:String,required:true},
})
const servicemodel=mongoose.model('service',serviceschema)
module.exports=servicemodel