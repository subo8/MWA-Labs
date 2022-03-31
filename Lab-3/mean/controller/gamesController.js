/**
 * Assignment 3.1
 * controller/gamesController.js
 */

"use strict";

const gameData = require("../resources/json/games.json");

module.exports.getAll = function (req, res) {
    console.log("Get All controller called");
    res.status(200).json(gameData);
}