/**
 * Assignment 3.1
 * index.js
 */

"use strict";

require('dotenv').config();
const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home/home');
const jsonRouter = require('./routes/json/json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(path.join(__dirname, "/resources/")));

app.use("", homeRouter);

app.use("/api", jsonRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: `Page not found`
    })
});

const server = app.listen(process.env.PORT, () => {
    console.log(process.env.LISTEN_PORT_MSG, server.address().port);
});

