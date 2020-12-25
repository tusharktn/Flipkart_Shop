require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/',(req,res,next) => {
    res.status(200).json({
        message:'Hello'
    })
});
app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running at ${process.env.port}`);
});

