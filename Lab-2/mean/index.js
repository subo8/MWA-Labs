/**
 * Assignment 2.3
 */

"use strict";

const express = require('express');
const path = require('path');
require('dotenv').config();
const homeRouter = require('./routes/home/home');

const app = express();

app.use("/static", express.static(path.join(__dirname, "/resources/")));

app.use("", homeRouter);

const server = app.listen(process.env.PORT, () => {
    console.log(process.env.LISTEN_PORT_MSG, server.address().port);
});

