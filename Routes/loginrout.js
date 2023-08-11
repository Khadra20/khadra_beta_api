const express=require('express')
const loginrout=express.Router();
const logincontrol=require('../Controllers/logincontroll')
loginrout.post('/',logincontrol.loginpost)

module.exports=loginrout