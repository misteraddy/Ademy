const express = require("express");
const router = express.Router();
const {
  addNewCourseController,
  getAllCourseController,
  getCourseDetailsByIDController,
  updateCourseByIDController,
} = require("../../controllers/instructorController/courseController");

router.post("/add", addNewCourseController);

router.get("/get", getAllCourseController);

router.get("/get/details/:id", getCourseDetailsByIDController);

router.put("/update/:id", updateCourseByIDController);

module.exports = router;
