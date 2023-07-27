const express=require('express')
const { default: mongoose } = require('mongoose')
const ourschema=mongoose.Schema({
    cleintname:{type:String,required:true},
    clientlogo:{type:String,required:true},
})
const ourmodel=mongoose.model('Our',ourschema)
module.exports=ourmodel