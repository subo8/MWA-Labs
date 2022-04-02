/**
 * Assignment 5.1
 * games-model.js
 */

"use strict";

const mongoose = require('mongoose');

const gamesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rate: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    price: Number,
    minPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    maxPlayers: Number,
    minAge: Number,
    designers: [String]
});

mongoose.model(process.env.GAME_MODEL, gamesSchema, process.env.GAME_COLLECTION);