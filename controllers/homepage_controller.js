const express = require("express");

let router = express.Router();
let db = require("../models");

// HTML ROUTES
// Load index page
router.get("/", function(req, res) {
  db.Example.findAll({}).then(function(dbExamples) {
    res.render("index", {
      msg: "Welcome!",
      examples: dbExamples
    });
  });
});

router.get("/product", (req, res) => {
  db.Product.findAll({}).then(dbProduct => {
    console.log(dbProduct)
    res.render("product", {
      product: dbProduct
    })
  })
})

// Load example page and pass in an example by id
router.get("/example/:id", function(req, res) {
  db.Example.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbExample) {
    res.render("example", {
      example: dbExample
    });
  });
});

// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});

// API ROUTES
// Get all examples
router.get("/api/examples", function(req, res) {
  db.Example.findAll({}).then(function(dbExamples) {
    res.json(dbExamples);
  });
});

// Create a new example
router.post("/api/examples", function(req, res) {
  db.Example.create(req.body).then(function(dbExample) {
    res.json(dbExample);
  });
});

// Delete an example by id
router.delete("/api/examples/:id", function(req, res) {
  db.Example.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbExample) {
    res.json(dbExample);
  });
});

// Products



router.post("/api/product", (req, res) => {
  db.Product.create(req.body).then(dbProduct => {
    res.json(dbProduct);
  })
})

module.exports = router;
