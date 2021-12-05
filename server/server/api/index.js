const express = require("express");
const router = express.Router();
const path = require("path");

const authMiddleware = require("../middleware/auth");
const auth = require("./auth");
const users = require("./users");
const images = require("./images");
const country = require("./country");
const conversations = require("./conversations");
const message = require("./message");

router.use("/auth", auth);
router.use("/users", authMiddleware, users);
router.use("/images", authMiddleware, images);
router.use("/country", authMiddleware, country);
router.use("/conversations", authMiddleware, conversations);
router.use("/message", authMiddleware, message);
router.use("/uploads", express.static(path.join(__dirname, "..", "..", "uploads")));

module.exports = router;
