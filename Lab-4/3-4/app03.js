console.log("Mean game running")

require('dotenv').config();
require('./data/dbconnection').open();

const express = require('express');
const path = require("path");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(process.env.PORT, function () {
    console.log(process.env.LISTEN_PORT_MSG, server.address().port);
})
