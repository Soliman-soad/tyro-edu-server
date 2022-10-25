const express =require('express');
const app =express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const course = require('./data/course.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('welcome to tyro server');
})
app.get('/courses',(req,res)=>{
    res.send(course)
})

app.listen(port,()=>{
    console.log('tyro server is running at port',port);
})