const courseRepository = require("../repositories/courseRepository");

const addNewCourseService = async (req) => {
  const {
    instructorId,
    instructorName,
    date,
    title,
    category,
    level,
    primaryLanguage,
    subtitle,
    description,
    image,
    welcomeMessage,
    pricing,
    objectives,
    curriculum,
  } = req.body;

  if (
    !instructorId ||
    !instructorName ||
    !date ||
    !title ||
    !category ||
    !level ||
    !primaryLanguage ||
    !description ||
    !pricing
  ) {
    throw new Error("Missing required fields");
  }

  const newCourse = {
    instructorId,
    instructorName,
    date: new Date(date),
    title,
    category,
    level,
    primaryLanguage,
    subtitle: subtitle || "",
    description,
    image: image || "",
    welcomeMessage: welcomeMessage || "",
    pricing,
    objectives: objectives || "",
    curriculum: curriculum || [],
    students: [],
    isPublished: false,
  };

  const response = await courseRepository.addNewCourseRepository(newCourse);
  return response;
};

const getAllCourseService = async () => {
  const response = await courseRepository.getAllCourseRepository();
  return response;
};

const getCourseDetailsByIDService = async (req) => {
  const { id } = req.params;
  const response = await courseRepository.getCourseDetailsByIDRepository(id);
  return response;
};

const updateCourseByIDService = async (req) => {
  const { id } = req.params;

  const formData = req.body;

  const response = await courseRepository.updateCourseByIDRepository(id, formData);
  return response;
};

module.exports = { 
  addNewCourseService, 
  getAllCourseService, 
  getCourseDetailsByIDService, 
  updateCourseByIDService 
};
