/**
 * Assignment 3.4
 * index.js
 */

"use strict";

require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes/students/index.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use('/api', routes);

app.use((req, res, next) => {
    res.status(404).json({
        message: `Page not found`
    })
});

const server = app.listen(process.env.PORT, () => {
    console.log(process.env.LISTEN_PORT_MSG, server.address().port);
});
