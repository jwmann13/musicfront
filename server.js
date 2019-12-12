if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Node packages
const express = require("express");
const exphbrs = require("express-handlebars");
const path = require("path");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

// Dummy data
const dummy = require("./dummy/dummyData");

// Passport config
require("./config/passport-config")(passport);

const PORT = process.env.PORT || 8080;

let app = express();
let db = require("./models");

// handlebars setup
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  exphbrs({
    defaultLayout: "main",
    helpers: {
      ifeq: function(a, b, options) {
        if (a === b) {
          return options.fn(this);
        }
        return options.inverse(this);
      },
      ifnotundef: function(a, options) {
        if (typeof a !== "undefined") {
          return options.fn(this);
        }
        return options.inverse(this);
      },
      ifnotemptystr: function(a, options) {
        if (a !== "" || a !== undefined) {
          return options.fn(this);
        }
        return options.inverse(this);
      },
      toLowerCase: function(str) {
        return str.toLowerCase();
      },
      toUpperCase: function(str) {
        return str.toUpperCase();
      }
    }
  })
);

// bpdy parsing
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// public files
app.use(express.static(path.join(__dirname, "public")));

// express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.successMsg = req.flash("successMsg");
  res.locals.errorMsg = req.flash("errorMsg");
  res.locals.error = req.flash("error");
  next();
});

// ROUTES
let users = require("./controllers/users");
let products = require("./controllers/products");
let api = require("./controllers/api");
let homepage = require("./controllers/homepage_controller");

app.use("/users", users);
app.use("/products", products);
app.use("/api", api);
app.use("/", homepage);

// DB SYNC AND START SERVER
db.sequelize
  .sync({
    force: true
  })
  .then(() => {
    db.Product.bulkCreate(dummy.products);
    db.Customer.bulkCreate(dummy.customers);
    db.Review.bulkCreate(dummy.reviews);
    app.listen(PORT, () => {
      console.log("App listening on Port: " + PORT);
    });
  });
