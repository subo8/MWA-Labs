/**
 * Assignment 5
 * index.js
 */

"use strict";

const express = require('express');
const router = express.Router();
const games = require("../controllers/game.controller");
const reviews = require("../controllers/review.controller");

router.route("/games").get(games.getAllMongoose);

router.route("/games/:gameIndex").get(games.getOneMongoose);

router.route("/games/:gamesID/review").get(reviews.getReviewByGameID);

router.route("/games/:gamesID/review/:reviewID").get(reviews.getReviewByGameAndReviewID);

module.exports = router;