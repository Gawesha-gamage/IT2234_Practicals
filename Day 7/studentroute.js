const express=require('express')
const router=express.Router()
const studentService=require('./studentservice')

router.get('/',(req,res)=>{
    const result=studentService.getstudents()
    if(result){
        res.status(200).json(result)
    }
    else{
      res.status(404).send("sorry,date not found") 
 
    }
    res.json(studentService.getstudents())
})

router.get('/:id',(req,res)=>
{
    const id=req.params.id
    const result=studentService.getStudent(id)
    if(result){
        res.status(200).json(result)
    }
    else{
      res.status(404).send("sorry,data not found") 
 
    }
   // res.json(studentService.getStudents())
})



router.get('/gender/:gen',(req,res)=>
{
    const gender=req.params.gen=='m'?'male':'female'
    const result=studentService.getgender(gender)
    if(result)
    {
        res.status(200).json(result)
    }
    else 
    {
        res.status(404).send("sorry,data not found")
    }

})


module.exports=router