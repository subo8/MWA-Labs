/**
 * Assignment 3.4
 * route/index.js
 */

"use strict";

const express = require('express');
const router = express.Router();
const students = require("../../controller/student");

router.route('/students')
    .get(students.getAll)

router.route('/students/:studentIndex')
    .get(students.getOne)

module.exports = router;