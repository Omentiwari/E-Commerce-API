const express=require('express');
const app=express();
const port=8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
require('dotenv').config()


// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

//make the app listen
app.listen(port,function(err){
    if(err){
        console.log('Error:',err)
    }
    console.log(`Server is running on port: ${port}`);
});
