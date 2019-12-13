const express = require("express");

let router = express.Router();
let db = require("../models");

// HTML ROUTES
// Load index page
router.get("/", function(req, res) {
  db.Product.findAll({}).then(function(dbProduct) {
    res.render("index", {
      msg: "Welcome!",
      product: dbProduct
    });
  });
});

// Checkout routing
router.get("/checkout", (req, res) => {
  db.Product.findAll({}).then(dbProduct => {
    // console.log(dbProduct);
    res.render("checkout", {
      product: dbProduct
    });
  });
});

// dashboard routing
router.get("/dashboard", (req, res) => {
  db.Product.findAll({}).then(dbProduct => {
    // console.log(dbProduct);
    res.render("dashboard", {
      product: dbProduct
    });
  });
});

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
