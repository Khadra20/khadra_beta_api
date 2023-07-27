const express=require('express')
const ourroute=express.Router();
const ourmodel=require('../../Controllers/hompagecontroller/ourcleintcontroller')
ourroute.get('/',ourmodel.getour)
ourroute.post('/',ourmodel.postour)
ourroute.put('/:id',ourmodel.putour)
ourroute.delete('/:mid',ourmodel.ourdel)
ourroute.get('/:id',ourmodel.ourbyid)
module.exports=ourroute