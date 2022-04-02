/**
 * Assignment 5.2
 * index.js
 */

"use strict";

const express = require('express');
const router = express.Router();
const students = require("../controllers/student.controller");
const courses = require("../controllers/course.controller");

router.route("/students").get(students.getAllMongoose);

router.route("/student/:studentIndex").get(students.getOneMongoose);

router.route("/students/:studentID/courses").get(courses.getCourseByStudentID);

router.route("/students/:studentID/courses/:courseID").get(courses.getCourseByStudentAndCourseID);

module.exports = router;