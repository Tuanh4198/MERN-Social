const express = require("express");
const mongoose = require("mongoose");
const { Message } = require("@db");
const router = express.Router();

if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

router
	.route("/")
	.post(async (req, res) => {
		const newMessage = new Message(req.body);
		try {
			const savedMessage = await newMessage.save();
			res.status(200).json(savedMessage);
		} catch (error) {
			res.status(500).json(error);
		}
	});

router
	.route("/:ConversationId")
	.get(async (req, res) => {
		try {
			const mesages = await Message.find({
				conversationId: req.params.ConversationId,
			});
			res.status(200).json(mesages);
		} catch (error) {
			res.status(500).json(error);
		}
	});

module.exports = router;
