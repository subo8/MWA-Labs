/**
 * @author Byambadorj Batsukh
 * Assignment 2.1
 */

"use strict";

console.log("App is running");

const http = require('http');
const fs = require('fs');

const hostname = `localhost`;
const port = 4444;

const server = http.createServer((req, res) => {

    if (req.method === "POST") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end("{`message`: `JSON response returned`}");
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        let url = req.url;

        if (url === '/page1') {
            fs.readFile(__dirname + "/public/page1.html", function (err, resp) {
                res.write(resp);
                res.end();
            })
        } else if (url === '/page2') {
            fs.readFile(__dirname + "/public/page2.html", function (err, resp) {
                res.write(resp);
                res.end();
            })
        } else {
            fs.readFile(__dirname + "/public/index.html", function (err, resp) {
                res.write(resp);
                res.end();
            })
        }
    }

});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}`);
});