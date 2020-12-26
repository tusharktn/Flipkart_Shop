require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

//NOTE Mongodb setup

mongoose.connect(process.env.MONGODB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected',() => {
    console.log("DATABASE CONNECTED");
});

mongoose.connection.on('error',() => {
    console.log('E R R O R');
});

app.use(express.json());



app.use('/',(req,res,next) => {
    res.status(200).json({
        message:'Hello'
    });
});
app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running at ${process.env.port}`);
});


