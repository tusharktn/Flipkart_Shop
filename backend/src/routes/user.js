const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const {
  isReqValidated,
  validateSignup,
  validateSignin,
} = require("../validator/validate");

//!NOTE SIGNIN ROUTE
router.post(
  "/signin",
  validateSignin,
  isReqValidated,
  passport.authenticate("local"),
  (req, res) => {
    User.find({ email: req.body.email }, (err, user) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(user);
    });
  }
);

//!NOTE SIGNUP ROUTE
router.post("/signup", validateSignup, isReqValidated, async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) console.log(err);
    // console.log(req.body.email);
    if (user) {
      return res.json({ message: "user exists" });
    } else {
      try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const contactNumber = req.body.contactNumber;

        const _user = new User({
          firstName,
          lastName,
          email,
          username,
          contactNumber,
        });
        const newUser = await User.register(_user, password);
        console.log("user created");
        res.send(newUser);
      } catch (error) {
        console.log(error);
      }
    }
  });
});

//!NOTE LOGOUT ROUTE

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("back");
});

module.exports = router;

// router.post("/register",function(req,res){
// 	User.register(new User({
// 		username:req.body.username,
// 		firstname:req.body.firstname,
// 		lastname:req.body.lastname,
// 		avatar:req.body.avatar,
// 		email:req.body.email
// 	}),req.body.password,function(err,user){
// 		if(err){
// 			req.flash("error",err.message);
// 			return res.redirect("/register");
// 		}else{
// 			passport.authenticate("local")(req,res,function(){
// 				req.flash("sucess","Welcome to YelpCamp,nice to meet you " + user.username);
// 				res.redirect("/campgrounds");
// 			});
// 		}
// 	});
// });

// router.post("/login",passport.authenticate("local",{
// 	successRedirect:"/campgrounds",
// 	failureRedirect:"/login",
// 	failureFlash:true,
// 	successFlash:"Welcome back "

// 	}),function(req,res){

// });
