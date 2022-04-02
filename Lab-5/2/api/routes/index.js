/**
 * Assignment 5
 * index.js
 */

"use strict";

const express = require('express');
const router = express.Router();
const students = require("../controllers/student.controller");
const courses = require("../controllers/course.controller");

router.route("/students").get(students.getAllMongoose);

router.route("/students/:studentIndex").get(students.getOneMongoose);

router.route("/students/:studentID/courses").get(courses.getAllMongoose);

// router.route("/games/create").post(games.create);

// router.route("/games/delete/:title").delete(games.delete);

module.exports = router;