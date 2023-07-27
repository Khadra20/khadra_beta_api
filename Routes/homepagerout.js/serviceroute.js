const express=require('express')
const serviceroute=express.Router();
const servicemodel=require('../../Controllers/hompagecontroller/servicecontrooler')
serviceroute.get('/',servicemodel.getservice)
serviceroute.post('/',servicemodel.postservice)
serviceroute.put('/:id',servicemodel.updatedservice)
serviceroute.delete('/:mid',servicemodel.servicedel)



module.exports=serviceroute