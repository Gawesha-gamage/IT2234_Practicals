
const express = require('express');
const app = express();
const port=3001;

//array of students JSON details
const students = require('./Db/Students')

/*let students ={regNo:'2021/ict/01', name:'sanjana', age:24, course:'IT',skills:['java','js','c++']}
console.log(student)
console.log(students.name)*/
//array of student JSON details



app.get('/stu', (req,res)=>{
    res.send(students);
});

app.get('/stu:id', (req,res)=>{
    const id =req.params.id 
const result = students.find((student)=>student.regno == id);
res.send(result);

});

//filter students by gender
app.get('/stu/gender/:gen', (req,res)=>
{
    const gender = req.params.gen
    console.log(gender)
    const result = students.filter((student)=> student.gender==gender);
    res.send(result);
 //check student is available or not, if not return an error message
    if(result)
        {
            res.send(result);
        }
        else
        {
            res.status(404).send("student not found");
        }

});




app.listen(port,()=>
{
     console.log(`server is running on ${port}`);

});