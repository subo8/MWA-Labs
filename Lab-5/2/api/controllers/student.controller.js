/**
 * Assignment 5
 * students controller.js
 */

"use strict";
const mongoose = require('mongoose');
const Students = mongoose.model(process.env.STUDENTS_MODEL);

module.exports.getAllMongoose = function (req, res) {
    Students.find().exec(function (err, students) {
        console.log('Found students', students.length);
        res.status(process.env.RESP200).json(students);
    });
}

module.exports.getOneMongoose = function (req, res) {
    const studentIndex = parseInt(req.params.studentIndex);
    let offset = 0;
    let count = studentIndex;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    Students.find().skip(offset).limit(count).exec(function (err, students) {
        console.log("Found students", students.length);
        res.status(process.env.RESP200).json(students)
    });
}