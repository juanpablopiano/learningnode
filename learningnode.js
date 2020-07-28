const fs = require("fs");

// const data = fs.readdirSync("c:/")
// console.log("data:", data);

const data = fs.readdir("c:/", (err, data) => console.log("data;", data))

console.log("This comes after")

module.exports = "Hello world";
