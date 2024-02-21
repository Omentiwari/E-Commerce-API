const mongoose=require('mongoose');
require('dotenv').config()
//connect data base
// mongoose.connect('mongodb://127.0.0.1:27017/product_details');
mongoose.connect(process.env.MONGO_URL);
const db=mongoose.connection;

db.on('error',console.error.bind(console, "Error connecting to MongoDB"));
db.once('open', function(){
    console.log('Connect to Database::MongoDB');
});

module.exports = db;