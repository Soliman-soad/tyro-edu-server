const express =require('express');
const app =express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('welcome to tyro server')
})

app.listen(port,()=>{
    console.log('tyro server is running at port',port);
})