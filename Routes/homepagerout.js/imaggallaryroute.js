const express=require('express')
const galaryroute=express.Router();
const gallarymodel=require('../../Controllers/hompagecontroller/imggallarycontroll')
galaryroute.get('/',gallarymodel.gellaryget)
galaryroute.post('/',gallarymodel.gellarypost)
galaryroute.put('/:id',gallarymodel.gellaryput)
galaryroute.delete('/:mid',gallarymodel.gellarydel)



module.exports=galaryroute