require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const path = require("path");
const User = require("./models/user");

//!NOTE routes import
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

app.use(
  require("express-session")({
    secret: "Anything",
    resave: false,
    saveUninitialized: false,
  })
);

// !NOTE Passport js setup
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//!NOTE Mongodb setup

mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("DATABASE CONNECTED");
});

mongoose.connection.on("error", () => {
  console.log("E R R O R");
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public/", express.static(path.join(__dirname, "uploads")));

//!NOTE routes configuration

app.use(userRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
