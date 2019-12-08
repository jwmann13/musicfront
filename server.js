const express = require("express");
const exphbrs = require("express-handlebars");
const path = require("path");
const dummy = require("./dummy/dummyData");

const PORT = process.env.PORT || 8080;

let app = express();
let db = require("./models");

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

db.sequelize
  .sync({
    force: true
  })
  .then(() => {
    db.Product.bulkCreate(dummy);
    app.listen(PORT, () => {
      console.log("App listening on Port: " + PORT);
    });
  });
