const Course = require("../schema/Course");

const addNewCourseRepository = async (formData) => {
  const response = await Course.create(formData);
  return response;
};

const getAllCourseRepository = async () => {
  const response = await Course.find();
  return response;
};

const getCourseDetailsByIDRepository = async (id) => {
  const response = await Course.findById(id);
  return response;
};

const updateCourseByIDRepository = async (id, updatedCourseData) => {
  const updatedCourse = await Course.findByIdAndUpdate(id, updatedCourseData, {
    new: true,
  });

  return updatedCourse;
};

const addLectureToCourse = async (courseId, lectureData) => {
  return await Course.findByIdAndUpdate(
    courseId,
    { $push: { curriculum: lectureData } },
    { new: true }
  );
};

module.exports = {
  addNewCourseRepository,
  getAllCourseRepository,
  getCourseDetailsByIDRepository,
  updateCourseByIDRepository,
  addLectureToCourse,
};
