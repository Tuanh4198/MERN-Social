const express = require("express");
const mongoose = require("mongoose");
const { Conversation } = require("@db");
const router = express.Router();

if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true);
}

router
	.route("/")
	.post(async (req, res) => {
		const newConversation = new Conversation({
			members: [req.body.senderId, req.body.receiverId],
		});
		try {
			const savedConversation = await newConversation.save();
			res.status(200).json(savedConversation);
		} catch (error) {
			res.status(500).json(error);
		}
	});

router
	.route("/:UserId")
	.get(async (req, res) => {
		try {
			const conversation = await Conversation.find({
				members: { $in: [req.params.UserId] },
			});
			res.status(200).json(conversation);
		} catch (error) {
			res.status(500).json(error);
		}
	});

module.exports = router;
