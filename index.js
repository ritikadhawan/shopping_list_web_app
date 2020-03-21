const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/mongoose');
const app = express();
connectDb();

//body parser
app.use(bodyParser.json());


const PORT = process.env.PORT||8000;
app.listen(PORT, (err)=>{
    if(err){
        console.log(`Error in running server on port ${PORT}`);
    }else{
        console.log(`Server running on port ${PORT}`);
    }
})