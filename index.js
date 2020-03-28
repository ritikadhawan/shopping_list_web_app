const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDb = require('./config/mongoose');

const app = express();

//connecting to database
connectDb();

//body parser
app.use(bodyParser.json());

//use routes
app.use('/api',require('./routes/api'));

//serve static assests if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    
    //build folder will be created via post build script when in production
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT||8000;
app.listen(PORT, (err)=>{
    if(err){
        console.log(`Error in running server on port ${PORT}`);
    }else{
        console.log(`Server running on port ${PORT}`);
    }
})