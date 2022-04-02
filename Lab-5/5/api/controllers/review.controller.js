/**
 * Assignment 5.3
 * reviews controller.js
 */

"use strict";
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const Game = mongoose.model(process.env.GAME_MODEL);

module.exports.getReviewByGameID = function (req, res) {
    console.log("Review get called");
    const gamesID = req.params.gamesID;
    Game.findById(gamesID).select("reviews").exec(function (err, games) {
        console.log("Found Reviews", games.reviews.length);
        res.status(process.env.RESP200).json(games.reviews);
    });
}

module.exports.getReviewByGameAndReviewID = function (req, res) {
    console.log("Course get called");
    const gamesID = req.params.gamesID;
    const reviewID = req.params.reviewID;


    Game.findById(gamesID).select("reviews").exec(function (err, games) {
        console.log("Found Reviews", games.reviews.id(reviewID), "for Game ", games);
        res.status(process.env.RESP200).json(games.reviews.id(reviewID));
    });
}