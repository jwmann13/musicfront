let router = require("express").Router();
let db = require("../models");
const passport = require("passport")

const { forwardAuthenticated } = require("../config/auth")

// LOGIN

router.get("/login", forwardAuthenticated, (req, res) => {
    res.render("login");
});

router.post("/login", (req, res, next) => {
        passport.authenticate("local", {
            successRedirect: "/",
            failureRedirect: "/login",
            failureFlash: true
        })(req, res, next)
    },
    (req, res) => {
        res.redirect("/users/" + req.user.username)
    }
);

router.get("/register", forwardAuthenticated, (req, res) => {
    res.render("register")
})

router.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        db.Customer.create({
            username: req.body.username,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        }).then(dbCustomer => {
            // console.log(dbCustomer)
            res.redirect("/login")
        })
    } catch {
        res.redirect("/register")
    }
})

router.get("/logout", (req, res) => {
    req.logOut();
    req.flash("success_msg", "you are logged out");
    res.redirect("users/login")
});

module.exports = router;