/**
 * Assignment 5.1
 * games controller.js
 */

"use strict";
const mongoose = require('mongoose');
const Game = mongoose.model(process.env.GAME_MODEL);

module.exports.getAllMongoose = function (req, res) {
    Game.find().exec(function (err, games) {
        console.log('Found games', games.length);
        res.status(process.env.RESP200).json(games);
    });
}

module.exports.getOneMongoose = function (req, res) {
    const gameIndex = parseInt(req.params.gameIndex);
    let offset = 0;
    let count = gameIndex;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    Game.find().skip(offset).limit(count).exec(function (err, games) {
        console.log("Found games", games.length);
        res.status(process.env.RESP200).json(games)
    });
}