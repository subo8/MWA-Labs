/**
 * Assignment 3.4
 * controller/student.js
 */

const studentData = require('../data/school.json');

module.exports.getAll = function (req, res) {
    console.log('GET/All controller called');
    res.status(200).json(studentData);
}

module.exports.getOne = function (req, res) {
    console.log('GET/ONE controller called');
    const studentIndex = req.params.studentIndex;
    res.status(200).json(studentData[studentIndex - 1]);
}