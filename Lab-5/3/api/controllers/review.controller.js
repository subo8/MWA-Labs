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


    console.log(reviewID)

    Game.aggregate({ $unwind: "$reviews" }, { $match: { "reviews._id": reviewID } }).exec(function (err, reviews) {
        res.status(process.env.RESP200).json(reviews);
    })

    // result.findById(reviewID).exec(function (err, reviews) {
    //     res.status(process.env.RESP200).json(reviews);
    //     // console.log("Found Reviews", games.reviews.length);
    //     // games.findById(reviewID).exec(function (err, reviews) {
    //     //     res.status(process.env.RESP200).json(games.reviews);
    //     // })
    // });




    // Game.findById(gamesID).select("reviews").findById(reviewID).exec(function (err, games) {
    //     console.log("Found Reviews", games.reviews.length);
    //     res.status(process.env.RESP200).json(games.reviews);
    // });
}