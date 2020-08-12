const express =require('express');
const mongoose =require('mongoose');
const morgan =require('morgan');
const path =require('path');



const app=express();

const routes= require('./routes/api')
const PORT = process.env.PORT || 8080;
const MONGODB_URL= 'mongodb+srv://komal3912:komal3912@cluster0.99mcf.mongodb.net/Expenseapp?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URL || process.env.MONGODB_URI ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});



mongoose.connection.on('connected',()=>{
    console.log("Mongoose Conencted!");

    
});




//http request logger
app.use(morgan('tiny'));
//routes
app.use('/api',routes);




app.listen(PORT,console.log(`Server is starting at the port ${PORT}`))
