require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');
//NOTE USER routes 
const userRoutes = require('./routes/user');


//NOTE Mongodb setup

mongoose.connect(process.env.MONGODB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.on('connected',() => {
    console.log("DATABASE CONNECTED");
});

mongoose.connection.on('error',() => {
    console.log('E R R O R');
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


// NOTE Passport js setup

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// app.get('/fakeUser',async (req,res) => {
//     try {
//         const user = new User({
//             firstName:'Tushar',
//             lastName:'Khaitan',
//             email:'pk@gmail.com',
//             username:'demo',
//             contactNumber:'56768'
//         });

//         const newUser = await User.register(user,'8568');
//         res.send(newUser);
//     } catch (error) {
//         console.log(error);
//     }
// });

app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running at ${process.env.port}`);
});


