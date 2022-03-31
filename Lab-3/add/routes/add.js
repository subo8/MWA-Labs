/**
 * Assignment 3.2
 * add.js
 */

"use strict";

const express = require('express');
const math = require('../controllers/mathController');
const router = express.Router();

router.route("/:id")
    .get(math.add);

module.exports = router;