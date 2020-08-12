const express =require('express');
const router =express.Router();
const Expense=require('../model/expense')

router.post('/save',(req,res)=>{
    console.log('Body: ',req.body)
    const data=req.body;

    const newExpense= new Expense(data);

    newExpense.save((error)=>{
         if(error){
             res.status(500).json({msg:'sorry,internal server errors'});
             return;
         } 
            return res.json({
                 msg:'your data has been saved!!'
             })
         
     })
    
});

router.get('/',(req,res) => {
   
    Expense.find({})
    .then((data)=>{
        console.log('data:' ,data);
        res.json(data);

    })
    .catch((err)=>{
        console.log('error: ', err);


    })
})

module.exports = router;