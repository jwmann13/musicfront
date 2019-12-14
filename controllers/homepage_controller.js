const express = require("express");

let router = express.Router();
let db = require("../models");

const { ensureAuthenticated } = require("../config/auth");

// HTML ROUTES
// Load index page
router.get("/", function(req, res) {
  db.Product.findAll({}).then(function(dbProduct) {
    if (req.user) {
      res.render("index", {
        msg: `Welcome ${req.user.dataValues.firstName}!`,
        user: req.user,
        product: dbProduct
      });
    } else {
      res.render("index", {
        msg: "Welcome!",
        product: dbProduct
      });
    }
  });
});

// Checkout routing
router.get("/checkout", (req, res) => {
  db.Product.findAll({}).then(function(dbProduct) {
    if (req.user) {
      res.render("checkout", {
        user: req.user,
        product: dbProduct
      });
    } else {
      res.render("checkout", {
        product: dbProduct
      });
    }
  });
});

// dashboard routing
router.get(
  "/dashboard",
  ensureAuthenticated,
  (req, res, next) => {
    db.Order.create({
      total: 10,
      CustomerId: req.user.dataValues.id
    });
    next();
  },
  (req, res) => {
    res.render("dashboard", {
      user: req.user
    });
  }
);

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
