require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbObject = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URL, dbObject, (err) => {
	console.log(!err ? "Connected to DB" : err.message);
});

const Message = mongoose.model("Message", {
	name: String,
	message: String,
});

app.get("/messages", (req, res) => {
	Message.find({}, (err, messages) => {
		res.send(messages);
	});
});

app.post("/messages", async (req, res) => {
	try {
		const message = new Message(req.body);

		const savedMessage = await message.save();

		console.log("Saved");

		io.emit("message", req.body);
		res.sendStatus(200);
	} catch (error) {
		res.sendStatus(500);
		return console.error(error);
	}
});

io.on("connection", (socket) => {
	console.log("A user connected");
});

http.listen(process.env.PORT, () =>
	console.log("Listening on port", process.env.PORT)
);
