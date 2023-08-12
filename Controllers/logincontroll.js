
const usermodel= require ('../Schema/userschema')
const loginvalidation =require('../validation/loginval')
const bycrypt =require('bcrypt')
const express = require('express')
require('dotenv').config();
const jwt=require('jsonwebtoken')
  const loginpost =async(req,res)=>{
    const {error}=loginvalidation(req.body)
    if(error) return res.status(400).send({error})
   try {
    const user=await usermodel.findOne({email:req.body.email,userStatus:'active'})
    if(!user) return res.status(400).send({error:"email not found"})
    const basscheck=await bycrypt.compare(req.body.password,user.password)
    if(!basscheck) return res.status(400).send({error:'invalid user or password'})
    const token=jwt.sign({email:user.email,id:user._id},process.env.secrate_key,{expiresIn:"1h"})
  res.status(200).send({ accessToken:token,login:true})
   } catch (error) {
    res.status(400).send(error.message)
   }
}
exports.loginpost=loginpost;