/**
 * Assignment 5
 * students controller.js
 */

"use strict";
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const Students = mongoose.model(process.env.STUDENTS_MODEL);

module.exports.getAllMongoose = function (req, res) {
    const studentID = parseInt(req.params.studentID);
    Students.find({ _id: ObjectId(studentID) }).select("courses").exec(function (err, students) {
        console.log("Found students", students.length);
        res.status(process.env.RESP200).json(students.courses);
    });
}