const express=require('express')
const conroute=express.Router();
const contectcontroll=require('../Controllers/contectformcontroller')
conroute.get('/',contectcontroll.contectformget)
conroute.post('/',contectcontroll.postform)
conroute.put('/:id',contectcontroll.putform)
conroute.delete('/:mid',contectcontroll.deleted)


module.exports=conroute