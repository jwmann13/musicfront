let router = require("express").Router();
let db = require("../models");

// Products API

//Get for all prpoducts
router.get("/products", (req, res) => {
  db.Product.findAll({}).then(function(product) {
    res.json(product);
  });
});

//Get products by category
router.get("/products/:id", (req, res) => {
  db.Product.findAll({
    where: {
      id: req.params.id
    }
  }).then(function(product) {
    res.json(product);
  });
});

//Get products by instrument
router.get("/products/instrument/:instrument", (req, res) => {
  db.Product.findAll({
    where: {
      instrumentFamily: req.params.instrument
    }
  }).then(function(product) {
    res.json(product);
  });
});

//Get products by brand
router.get("/products/brand/:brand", (req, res) => {
  db.Product.findAll({
    where: {
      color: req.params.brand
    }
  }).then(function(product) {
    res.json(product);
  });
});

router.get("/users/:username", (req, res) => {
  db.Customer.findOne({
    where: {
      username: req.params.username
    }
  }).then(data => res.json(data));
});

//Post new products
router.post("/product", (req, res) => {
  db.Product.create(req.body).then(dbProduct => {
    res.json(dbProduct);
  });
});

module.exports = router;