const studentService = require("../../services/studentService");
const {
  successResponse,
  createdResponse,
  notFoundResponse,
  errorResponse,
} = require("../../utils/responseHandler");

const getAllStudentViewCourses = async (req, res) => {
  try {
    const response = await studentService.getAllCourses(req.query);

    return successResponse(res, response, "Courses retrieved successfully.");
  } catch (error) {
    console.error(error);
    return errorResponse(res);
  }
};

const getStudentViewCourseDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await studentService.getCourseDetailsById(id);
    return successResponse(res, response, "All Courses fetched successfully");
  } catch (error) {
    console.error(error);
    return errorResponse(res);
  }
};

const checkCoursePurchaseInfo = async (req, res) => {};

module.exports = {
  getAllStudentViewCourses,
  getStudentViewCourseDetails,
  checkCoursePurchaseInfo,
};
