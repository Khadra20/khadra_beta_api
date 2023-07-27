const express=require('express')
const imgroute=express.Router();
const imgcontroll=require('../Controllers/imagescontrol')
imgroute.get('/',imgcontroll.imageget)
imgroute.post('/',imgcontroll.imgpost)
imgroute.put('/:id',imgcontroll.imageput)
imgroute.delete('/:mid',imgcontroll.imagedeleted)
imgroute.get('/:id',imgcontroll.imageget)

module.exports=imgroute