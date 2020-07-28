const fs = require("fs")

const data = {
    name: "Juan",
    age: "26"
}

fs.writeFile("data.json", JSON.stringify(data), (err) => console.log(err) )
