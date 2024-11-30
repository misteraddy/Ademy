const Course = require("../schema/Course");

const findCourses = async (filters, sortParam) => {
  console.log(filters);

  console.log(sortParam);

  const response = await Course.find(filters).sort(sortParam);

  console.log(response);

  return response;
};

module.exports = {
  findCourses,
};
