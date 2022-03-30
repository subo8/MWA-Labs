/**
 * Assignment 2.2
 */

"use strict";

const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.post("/json", (req, res) => {
    res.status(200).json({ "JSON RESP": "Hello World" });
});

const server = app.listen(process.env.PORT, () => {
    console.log(process.env.LISTEN_TO_PORT_MSG, server.address().port);
});
