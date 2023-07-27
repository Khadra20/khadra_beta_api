const express =require('express')
const { default: mongoose } = require('mongoose')
const guryoschema=new  mongoose.Schema({
    noocaguriga:{type:String,required:true
    },
    area:{ type:String,required:true },
    address:{ type:String,required:true },
    age:{ type:String,required:true },
    rent:{ type:String,required:true },
    deposite:{ type:String,required:true },
    parkin:{ type:String,required:true },
    imagepreview:{ type:String, required:true},
    isavalible:{ type:String,required:true },
    rooms:{ type:String,required:true },
    suuliyada:{ type:String,required:true },
    masterroom:{ type:String,required:true },
    faafaahin:{ type:String,required:true },
    // waxaa la isku xiraa home & useka
    Useid:{type:mongoose.Types.ObjectId,ref:'User'}
})
const homemodel=mongoose.model('Home',guryoschema)
module.exports= homemodel;