/**
 * Assignment 3.2
 * mathController.js
 */

"use strict";

module.exports.add = function (req, res) {
    console.log("GET home controller called");
    const result = parseInt(req.params.id) + parseInt(req.query.number);
    res.status(200).send(`<h1>Result is: ${result}</h1> `);
}