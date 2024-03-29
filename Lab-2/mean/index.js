/**
 * Assignment 2.3
 */

"use strict";

const express = require('express');
const path = require('path');
require('dotenv').config();
const homeRouter = require('./routes/home/home');

const app = express();

//response is singleton, once it ends there is no other response.
//if no next param, there is no response, browser is reloading endlessly.
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next(); //terminating middle ware
});

app.use("/static", express.static(path.join(__dirname, "/resources/")));

app.use("", homeRouter);

const server = app.listen(process.env.PORT, () => {
    console.log(process.env.LISTEN_PORT_MSG, server.address().port);
});

