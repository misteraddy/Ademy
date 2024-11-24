const express = require("express");
const authRouter = require("./authRoute");
const mediaRouter = require("./instructorRoute");

const router = express.Router();

router.use("/auth", authRouter);

router.use("/media", mediaRouter);

module.exports = router;
