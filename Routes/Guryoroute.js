const express =require('express')
const homecontrollar=require('../Controllers/homecontrollar')
const router=express.Router();
router.get('/', homecontrollar.gethome)
router.post('/',homecontrollar.homepost)
router.put('/:id',homecontrollar.puthome)
router.delete('/:mid',homecontrollar.homedel)
module.exports=router;