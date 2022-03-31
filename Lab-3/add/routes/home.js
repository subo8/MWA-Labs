/**
 * Assignment 3.2
 * home.js
 */

"use strict";

const express = require('express');
const home = require('../controllers/homeController');
const router = express.Router();

router.route("")
    .get(home.home);

module.exports = router;