const { createReadStream, createWriteStream, read } = require("fs");

const readStream = createReadStream("d://powder-day.mp4");
const writeStream = createWriteStream("d://copy.mp4", {
    // highWaterMark: 1628920128
});

readStream.on("data", (chunk) => {
	const result = writeStream.write(chunk);
	if (!result) {
		console.log("Backpressure");
		readStream.pause();
	}
});

readStream.on("end", () => {
	writeStream.end();
});

writeStream.on("drain", () => {
	console.log("Drained");
	readStream.resume();
});

readStream.on("error", (error) => {
	console.log("An error has ocurred", error.message);
});

writeStream.on("close", () => {
	process.stdout.write("File copied\n");
});
