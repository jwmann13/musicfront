let router = require("express").Router();
let db = require("../models");
const passport = require("passport");
const bcrypt = require("bcrypt");

const { forwardAuthenticated } = require("../config/auth");

// LOGIN
// GETS
router.get("/login", forwardAuthenticated, (req, res) => {
  res.render("login");
});

router.get("/register", forwardAuthenticated, (req, res) => {
  res.render("register");
});

router.post(
  "/login",
  (req, res, next) => {
    passport.authenticate("local", {
      failureRedirect: "/users/login",
      failureFlash: true
    })(req, res, next);
  },
  (req, res) => {
    console.log(req.user);
    db.Order.create({
      total: 10,
      CustomerId: req.user.id
    }).then(() => {
      res.redirect("/dashboard");
    });
  }
);

// POSTS
router.post("/register", async (req, res) => {
  const { username, password, firstName, lastName, address, email } = req.body;
  let errors = [];

  if (!username || !password || !firstName || !lastName || !address || !email) {
    errors.push({
      msg: "Please enter all fields"
    });
  }

  if (password.length < 6) {
    errors.push({
      msg: "Password must be at least 6 characters"
    });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      username,
      password,
      firstName,
      lastName,
      address,
      email
    });
  } else {
    db.Customer.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (user) {
        errors.push({
          msg: "Email already exists"
        });
        res.render("register", {
          errors,
          username,
          password,
          firstName,
          lastName,
          address,
          email
        });
      } else {
        let newUser = {
          username,
          password,
          firstName,
          lastName,
          address,
          email
        };

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            newUser.password = hash;
            db.Customer.create(newUser)
              .then(() => {
                req.flash(
                  "success_msg",
                  "You are now registered and can log in"
                );
                res.redirect("/users/login");
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

router.get("/logout", (req, res) => {
  req.logOut();
  req.flash("success_msg", "you are logged out");
  res.redirect("/users/login");
});

module.exports = router;
