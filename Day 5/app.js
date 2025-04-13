const express = require('express');

const app= express();
const port=3001;

//array of student JSON details
const students = require('./DB/studentdb')
 
    app.get('/stu',(req,res)=>{
        res.send(students);
    });

    app.get('/stu/:id',(req,res)=>{
        const id =req.params.id
        //console.log(id)
        const result = students.find((student)=>student.regno == id);
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
    
    //filter student by gender
    app.get('/stu/gender/:gen',(req,res)=>{
        const gender =req.params.gen
        //console.log(id)
        const result = students.filter((student)=>student.gender == gender);
        res.send(result);
    });

/*app.get('/',(req,res)=>{
    res.send('Hello express JS');
});

app.get('/msg',(req,res)=>{
    res.send('Hello IT students');
});*/

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})