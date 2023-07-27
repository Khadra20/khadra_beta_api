const express=require('express')
const aboutroute=express.Router();
const aboutcontroller=require('../Controllers/aboutcontroller')
aboutroute.get('/',aboutcontroller.aboutget)
aboutroute.post('/',aboutcontroller.aboutpost)
aboutroute.put('/:id',aboutcontroller.aboutput)
aboutroute.delete('/:mid',aboutcontroller.aboutdel)
aboutroute.get('/:id',aboutcontroller.aboutbyid)


module.exports=aboutroute