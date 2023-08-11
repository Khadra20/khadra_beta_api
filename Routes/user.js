// const login=require('../Controllers/logincontroll')
const express =require('express')
const route=express.Router();
const usermodel=require('../Controllers/usercontrol')
route.get('/',usermodel.getuser)
route.post('/signup',usermodel.signup)
route.delete('/:id',usermodel.deleteuser)
// route.post('/login',usermodel.login)


module.exports=route;