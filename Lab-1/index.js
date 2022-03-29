const child_process = require("child_process");

console.log("1: Start app");

child_process.spawn("node", ["./fibo.js"], { stdio: "inherit" });

console.log("3: End app");