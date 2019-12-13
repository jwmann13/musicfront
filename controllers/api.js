let router = require("express").Router();
let db = require("../models");
let { customerCartAuthenticate } = require("../config/auth");

// Products API

//Get for all prpoducts
router.get("/products", (req, res) => {
  db.Product.findAll({}).then(function(product) {
    res.json(product);
  });
});

//Get products by category
router.get("/products/:id", customerCartAuthenticate, (req, res) => {
  db.Product.findOne({
    where: {
      id: req.params.id
    }
  }).then(product => {
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
