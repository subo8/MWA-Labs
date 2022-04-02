/**
 * Assignment 5
 * index.js
 */

"use strict";

const express = require('express');
const router = express.Router();
const games = require("../controllers/games");

router.route("/games").get(games.getAllMongoose);

router.route("/games/:gameIndex").get(games.getOneMongoose);

// router.route("/games/create").post(games.create);

// router.route("/games/delete/:title").delete(games.delete);

module.exports = router;