const CourseProgress = require("../schema/CourseProgress");

const findCourseProgress = async (userId, courseId) => {
  return CourseProgress.findOne({ userId, courseId });
};

const saveCourseProgress = async (courseProgress) => {
  return courseProgress.save();
};

module.exports = {
  findCourseProgress,
  saveCourseProgress,
};
