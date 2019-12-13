let router = require("express").Router();
let db = require("../models");

// list of all products
router.get("/", (req, res) => {
  db.Product.findAll({}).then(dbProduct => {
    // console.log(dbProduct);
    if (req.user) {
      res.render("product", {
        user: req.user,
        product: dbProduct
      })
    } else {
      res.render("product", {
        product: dbProduct
      });
    }
  });
});

// list of products by instrument family
router.get("/instrument/:family", (req, res) => {
  db.Product.findAll({
    where: {
      instrumentFamily: req.params.family
    }
  }).then(dbProduct => {
    // console.log(dbProduct);
    if (req.user) {
      res.render("product", {
        user: req.user,
        product: dbProduct
      })
    } else {
      res.render("product", {
        product: dbProduct
      });
    }
  });
});

// product info page by id
router.get("/info/:id", (req, res) => {
  db.Product.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Review]
  }).then(dbProduct => {
    // console.log(dbProduct);
    if (req.user) {
      res.render("product-info", {
        user: req.user,
        product: dbProduct
      })
    } else {
      res.render("product-info", {
        product: dbProduct
      });
    }
  });
});

module.exports = router;
