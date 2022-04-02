/**
 * Assignment 5
 * students controller.js
 */

"use strict";
const mongoose = require('mongoose');
const Students = mongoose.model(process.env.STUDENTS_MODEL);

module.exports.getCourseByStudentID = function (req, res) {
    console.log("Course get called");
    const studentID = req.params.studentID;
    Students.findById(studentID).select("courses").exec(function (err, students) {
        console.log(studentID);
        console.log("Found students", students.courses.length);
        res.status(process.env.RESP200).json(students.courses);
    });
}

module.exports.getCourseByStudentAndCourseID = function (req, res) {
    console.log("Course get called");
    const studentID = req.params.studentID;
    const courseID = req.params.courseID;
    console.log(courseID);
    Students.findById(studentID).select("courses").exec(function (err, students) {
        console.log(studentID);
        console.log("Found students", students.courses.length);
        res.status(process.env.RESP200).json(students.courses);
    });
}