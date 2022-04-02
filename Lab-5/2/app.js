/**
 * Assignment 5.2
 * app.js
 */

"use strict";

console.log("SchoolDB is running")

require('dotenv').config();
require('./api/data/db.js');

const express = require('express');
const path = require("path");

const routes = require("./api/routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(process.env.PORT, function () {
    console.log(process.env.LISTEN_PORT_MSG, server.address().port);
})
