const studentService = require("../../services/studentService");
const {
  successResponse,
  createdResponse,
  notFoundResponse,
  errorResponse,
} = require("../../utils/responseHandler");

const getAllStudentViewCourses = async (req, res) => {
  try {
    const coursesList = await studentService.getAllCourses(req.query);

    if (coursesList.length === 0) {
      return notFoundResponse(res, "No courses found matching the criteria.");
    }

    return successResponse(res, coursesList, "Courses retrieved successfully.");
  } catch (error) {
    console.error(error);
    return errorResponse(res);
  }
};

module.exports = {
  getAllStudentViewCourses,
};

const getStudentViewCourseDetails = async (req, res) => {};

const checkCoursePurchaseInfo = async (req, res) => {};

module.exports = {
  getAllStudentViewCourses,
  getStudentViewCourseDetails,
  checkCoursePurchaseInfo,
};
