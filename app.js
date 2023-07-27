const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
// const {MongoMemoryServer}=require('mongodb-memory-server')
const route=require('./Routes/user');
const router = require('./Routes/Guryoroute');
const imgroute = require('./Routes/imageroute');
const xogrout = require('./Routes/homepagerout.js/homesitroute')
const conroute = require('./Routes/contectroutes');
const aboutroute = require('./Routes/aboutrouter');
const galaryroute = require('./Routes/homepagerout.js/imaggallaryroute');
const serviceroute = require('./Routes/homepagerout.js/serviceroute');
const ourroute = require('./Routes/homepagerout.js/ourcleintroute');

const app=express();

app.use(express.json())
app.use(cors())
const dbconnect=async()=>{
  const password = 'hayat123';
  // Construct the connection string
  const uri = `mongodb+srv://hayat:${password}@cluster0.yo08vqy.mongodb.net/test?retryWrites=true&w=majority`;
  // Connect to the MongoDB Atlas cluster

    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { app.listen(2000)})
    .catch(error => console.error('Error connecting to MongoDB Atlas:', error));
    
}
dbconnect();

app.use('/Guryo',router)
app.use('/image',imgroute)
app.use('/homesit',xogrout)
app.use('/contect',conroute)
app.use('/about',aboutroute)
app.use('/Gellary',galaryroute)
app.use('/service',serviceroute)
app.use('/ourcleint',ourroute)

//   const mongod =  MongoMemoryServer.create();

app.get('/',()=> {
  res.json("hi")

  
  })

module.exports=app