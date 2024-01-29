const express = require('express');

const app = express();
const userRouter = require('./routes/users');
const homeRouter = require('./routes/home')


const mobgoose = require('mongoose');

mobgoose
    .connect("mongodb://localhost:27017/newxpress")
    .then(()=>{
        console.log("connected to mongodb");
    }).catch(()=>{
        console.log("could not connect to mongodb");
    })
    

app.use('/',homeRouter);
app.use('/api/users',userRouter);














app.listen(3000,()=>{
    console.log('Listening on port 3000');    
})