/**
 * Assignment 3.1
 * routes/json.js
 */

"use strict";

const express = require('express');
const router = express.Router();
const games = require('../../controller/gamesController');

router.route("/games")
    .get(games.getAll)

module.exports = router;