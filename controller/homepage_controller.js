const express = require('express');

let router = express.Router();

let db = require('../models');

router.get('/', (req, res) => {
    res.send("hello");
})

module.exports = router;