const express = require("express");
const authRouter = require("./authRoute");
const mediaRouter = require("./instructor-routes/instructorRoutes");
const courseRouter = require("./instructor-routes/instructorRoutes");
const instructorRouter = require("./instructor-routes/instructorRoutes");
const studentRouter = require("./student-routes/studentRoutes");

const router = express.Router();

router.use("/auth", authRouter);

router.use("/media", mediaRouter);

router.use("/instructor",instructorRouter);

router.use("/student",studentRouter);

module.exports = router;
