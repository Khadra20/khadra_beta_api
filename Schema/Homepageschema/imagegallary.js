const express=require('express')
const { default: mongoose } = require('mongoose')
const imaggallaryschema=mongoose.Schema({
    imgtitle:{type:String,required:true},
    Image:{type:String,required:true},
})
const gallarymodel=mongoose.model('gellary',imaggallaryschema)
module.exports=gallarymodel