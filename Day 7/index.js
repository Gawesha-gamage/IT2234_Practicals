const express=require('express');
const app =express();
const port=3001;

const studentroute=require('./student/studentroute')

app.use(express.json())
app.use('/student',studentroute)

app.listen(port,()=>{
    console.log(`service running on ${port}`);
})