const courseProgressService = require("../../services/courseProgressService");
const { successResponse, errorResponse } = require("../../utils/responseHandler");


const markCurrentLectureAsViewed = async (req, res) => {
  try {
    const { userId } = req.user; 
    const { courseId, lectureId } = req.body; 

    if (!courseId || !lectureId) {
      return errorResponse(res, "Course ID and Lecture ID are required.", 400);
    }

    const response = await courseProgressService.markCurrentLectureAsViewed(userId, courseId, lectureId);

    return successResponse(res, response, "Lecture marked as viewed successfully.");
  } catch (error) {
    console.error("Error marking lecture as viewed:", error.message);
    return errorResponse(res, "Failed to mark lecture as viewed.");
  }
};


const getCurrentCourseProgress = async (req, res) => {
  try {
    const { userId } = req.user;
    const { courseId } = req.query;

    if (!courseId) {
      return errorResponse(res, "Course ID is required.", 400);
    }

    const progress = await courseProgressService.getCurrentCourseProgress(userId, courseId);

    return successResponse(res, progress, "Course progress retrieved successfully.");
  } catch (error) {
    console.error("Error retrieving course progress:", error.message);
    return errorResponse(res, "Failed to retrieve course progress.");
  }
};


const resetCurrentCourseProgress = async (req, res) => {
  try {
    const { userId } = req.user;
    const { courseId } = req.body;

    if (!courseId) {
      return errorResponse(res, "Course ID is required.", 400);
    }

    const resetResponse = await courseProgressService.resetCurrentCourseProgress(userId, courseId);

    return successResponse(res, resetResponse, "Course progress reset successfully.");
  } catch (error) {
    console.error("Error resetting course progress:", error.message);
    return errorResponse(res, "Failed to reset course progress.");
  }
};


module.exports = {
  markCurrentLectureAsViewed,
  getCurrentCourseProgress,
  resetCurrentCourseProgress,
};
