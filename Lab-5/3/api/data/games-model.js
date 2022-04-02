/**
 * Assignment 5.3
 * games model.js
 */

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        "default": Date.Now
    },
});
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
    designers: [String],
    reviews: [reviewSchema]
});

mongoose.model(process.env.GAME_MODEL, gamesSchema, process.env.GAME_COLLECTION);