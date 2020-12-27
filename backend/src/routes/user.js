const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

//!NOTE SIGNIN ROUTE
router.post("/signin", passport.authenticate("local"), (req, res) => {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(user);
  });
});

//!NOTE SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  User.find({ email: req.body.email }, async (err, user) => {
    if (err) console.log(err);
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
        const newUser = await User.register(_user, password.toString());
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
