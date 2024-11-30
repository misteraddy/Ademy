const courseService = require("../../services/courseService");
const {
  successResponse,
  createdResponse,
  notFoundResponse,
  errorResponse,
} = require("../../utils/responseHandler");

const addNewCourseController = async (req, res) => {
  try {
    const response = await courseService.addNewCourseService(req);
    return createdResponse(res, response, "Course added successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const getAllCourseController = async (req, res) => {
  try {
    const response = await courseService.getAllCourseService();
    return successResponse(res, response, "Courses fetched successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const getCourseDetailsByIDController = async (req, res) => {
  try {
    const response = await courseService.getCourseDetailsByIDService(req);
    if (!response) {
      return notFoundResponse(res, "Course not found");
    }
    return successResponse(res, response, "Course details fetched successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const updateCourseByIDController = async (req, res) => {
  try {
    const response = await courseService.updateCourseByIDService(req);
    if (!response) {
      return notFoundResponse(res, "Course not found for update");
    }
    return successResponse(res, response, "Course updated successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = {
  addNewCourseController,
  getAllCourseController,
  getCourseDetailsByIDController,
  updateCourseByIDController,
};
