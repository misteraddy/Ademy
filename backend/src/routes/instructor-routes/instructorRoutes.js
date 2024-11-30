const express = require("express");
const courseRouter = require("./courseRoutes");
const router = express.Router();

router.use("/course", courseRouter);

module.exports = router;
