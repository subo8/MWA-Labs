/**
 * Assignment 5
 * db.js
 */

"use strict";

const mongoose = require("mongoose");
require('./students-model');

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", function () {
    console.log("Mongoose connected to " + process.env.DB_NAME);
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose disconnected");
});

mongoose.connection.on("error", function (err) {
    console.log("Mongoose Error", err);
});

//Disconnect
process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log(process.env.SIGINT_MESSAGE);
        process.exit(0);
    });
});

//Terminate
process.on("SIGTERM", function () {
    mongoose.connection.close(function () {
        console.log(process.env.SIGTERM_MESSAGE);
        process.exit(0);
    });
});

//Restart
process.on("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid, "SIGUSR2");
    });
});
