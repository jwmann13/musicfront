const express = require("express");
const passport = require("passport");

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

// list of all products
router.get("/product", (req, res) => {
  db.Product.findAll({}).then(dbProduct => {
    // console.log(dbProduct);
    res.render("product", {
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

router.get("/login", (req, res) => {
  res.render("login", {});
});

// list of products by instrument family
router.get("/product/instrument/:family", (req, res) => {
  db.Product.findAll({
    where: {
      instrumentFamily: req.params.family
    }
  }).then(dbProduct => {
    // console.log(dbProduct);
    res.render("product", {
      product: dbProduct
    });
  });
});

// product info page by id
router.get("/product/info/:id", (req, res) => {
  db.Product.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Review]
  }).then(dbProduct => {
    // console.log(dbProduct);
    res.render("product-info", {
      product: dbProduct
    });
  });
});

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});

// Products API

//Get for all prpoducts
router.get("/api/products", (req, res) => {
  db.Product.findAll({}).then(function(product) {
    res.json(product);
  });
});

//Get single product by name
router.get("/api/products/:product", (req, res) => {
  db.Product.findAll({
    where: {
      name: req.params.name
    }
  }).then(function(product) {
    res.json(product);
  });
});

//Get products by category
router.get("/api/products/category/:category", (req, res) => {
  db.Product.findAll({
    where: {
      category: req.params.category
    }
  }).then(function(product) {
    res.json(product);
  });
});

//Get products by instrument
router.get("/api/products/instrument/:instrument", (req, res) => {
  db.Product.findAll({
    where: {
      instrumentFamily: req.params.instrument
    }
  }).then(function(product) {
    res.json(product);
  });
});

router.get("/api/products", (req, res) => {
  db.Product.findAll({}).then(function(product) {
    res.json(product);
  });
});

//Post new products
router.post("/api/product", (req, res) => {
  db.Product.create(req.body).then(dbProduct => {
    res.json(dbProduct);
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

module.exports = router;
