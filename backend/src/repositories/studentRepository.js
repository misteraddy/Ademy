const Course = require("../schema/Course");
const StudentCourses = require("../schema/StudentCourses");

const findCourses = async (filters, sortParam) => {
  const response = await Course.find(filters).sort(sortParam);

  return response;
};

const findCourseById = async (id) => {
  return await Course.findById(id);
};

const getStudentCoursesByUserId = (userId) =>
  StudentCourses.findOne({ userId });

const addCourseToStudentCourses = (studentCourses, order) => {
  studentCourses.courses.push({
    courseId: order.courseId,
    title: order.courseTitle,
    instructorId: order.instructorId,
    instructorName: order.instructorName,
    dateOfPurchase: order.orderDate,
    courseImage: order.courseImage,
  });

  return studentCourses.save();
};

const createStudentCourses = (order) => {
  const newStudentCourses = new StudentCourses({
    userId: order.userId,
    courses: [
      {
        courseId: order.courseId,
        title: order.courseTitle,
        instructorId: order.instructorId,
        instructorName: order.instructorName,
        dateOfPurchase: order.orderDate,
        courseImage: order.courseImage,
      },
    ],
  });

  return newStudentCourses.save();
};

module.exports = {
  findCourses,
  findCourseById,
  getStudentCoursesByUserId,
  addCourseToStudentCourses,
  createStudentCourses,
};
