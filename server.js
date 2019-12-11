// Node packages
const express = require("express");
const exphbrs = require("express-handlebars");
const path = require("path");
const dummy = require("./dummy/dummyData");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const PORT = process.env.PORT || 8080;

let app = express();
let db = require("./models");

app.use(passport.initialize());
app.use(passport.session());

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

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
      toLowerCase: function(str) {
        return str.toLowerCase();
      },
      toUpperCase: function(str) {
        return str.toUpperCase();
      }
    }
  })
);
app.set("view engine", "handlebars");

let routes = require("./controllers/homepage_controller");

app.use(routes);

app.get("/success", (req, res) =>
  res.send("Welcome " + req.query.username + "!!")
);
app.get("/error", (req, res) => res.send("error logging in"));

passport.use(
  new LocalStrategy(function(username, password, done) {
    db.Customer.findOne(
      {
        userName: username
      },
      function(err, user) {
        console.log(user);
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (user.userPassword !== password) {
          return done(null, false);
        }
        return done(null, user);
      }
    );
  })
);

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

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});
