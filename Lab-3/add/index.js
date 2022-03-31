/**
 * @author Byambadorj Batsukh
 * Assignment 3.2
 * index.js
 */

"use strict";

require('dotenv').config();
const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');

const app = express();

app.use("/", homeRouter);
app.use("/add", addRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: `Page not found`
    })
});

const server = app.listen(process.env.PORT, () => {
    console.log(process.env.LISTEN_PORT_MSG, server.address().port);
})