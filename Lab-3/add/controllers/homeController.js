/**
 * Assignment 3.2
 * homeController.js
 */

"use strict";

module.exports.home = function (req, res) {
    console.log("GET Add controller called");
    res.status(200).send(`
    <h1>This is home page, type in the url something like below,</h1>
    <h3>localhost:5656/add/1?number=3<h3>`);
}