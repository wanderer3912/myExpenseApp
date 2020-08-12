const mongoose=require('mongoose')

//schema
const Schema =mongoose.Schema;
const ExpenseSchema= new Schema({
    title:String,
     body:String,
     date:{
         type:String,
         default:Date.now()
     }
})

//Model

const Expense = mongoose.model('myexpense',ExpenseSchema);
module.exports= Expense;