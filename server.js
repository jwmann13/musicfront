const express = require('express');
const exphbrs = require('express-handlebars');
const path = require('path')

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbrs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

let routes = require('./controller/homepage_controller');

app.use(routes);

app.listen(PORT, () => {
    console.log('App listening on Port: ' + PORT);
})