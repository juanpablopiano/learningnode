const path = require("path");

// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename))
// console.log(process.versions.node)
// console.log(process.argv)

// const [,, name] = process.argv;

// console.log(`My name is ${name}`)

const grab = flag => {
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}
const name = grab("--name");
console.log(`My name is ${name}`)
