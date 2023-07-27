const express=require('express')
const xogrout=express.Router();
const xogtacontroll=require('../../Controllers/hompagecontroller/homesitingcontroller')
xogrout.get('/',xogtacontroll.xogtahel)
xogrout.post('/',xogtacontroll.postxogta)
xogrout.put('/:id',xogtacontroll.putxog)
xogrout.delete('/:myid',xogtacontroll.daleted)
module.exports=xogrout