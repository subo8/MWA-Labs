const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    }
});

const studentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gpa: {
        type: String,
        required: true
    },
    courses: [courseSchema]
});

mongoose.model(process.env.STUDENTS_MODEL, studentsSchema, process.env.STUDENTS_COLLECTION);