const express = require("express");
const {
  getCoursesByStudentId,
} = require("../../controllers/studentController/studentCourseController");

const router = express.Router();

router.get("/get/:studentId", getCoursesByStudentId);

module.exports = router;
