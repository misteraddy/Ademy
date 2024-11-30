const express = require("express");
const studentCoursesRouter = require("./studentCoursesRoutes");
const orderRouter = require("./orderRoutes");
const courseRouter = require("./courseRoutes");
const courseProgressRouter = require("./courseProgressRoutes");

const router = express.Router();

router.use("/course",courseRouter);

router.use("/order",orderRouter);

router.use("/courses-bought",studentCoursesRouter);

router.use("/course-progress",courseProgressRouter);

module.exports = router;
