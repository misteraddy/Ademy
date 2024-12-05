const studentRepository = require("../repositories/studentRepository");

const getAllCourses = async (query) => {
  const {
    category = [],
    level = [],
    primaryLanguage = [],
    sortBy = "price-lowtohigh",
  } = query;

  let filters = {};
  if (category.length) {
    filters.category = { $in: category.split(",") };
  }
  if (level.length) {
    filters.level = { $in: level.split(",") };
  }
  if (primaryLanguage.length) {
    filters.primaryLanguage = { $in: primaryLanguage.split(",") };
  }

  let sortParam = {};
  switch (sortBy) {
    case "price-lowtohigh":
      sortParam.pricing = 1;
      break;
    case "price-hightolow":
      sortParam.pricing = -1;
      break;
    case "title-atoz":
      sortParam.title = 1;
      break;
    case "title-ztoa":
      sortParam.title = -1;
      break;
    default:
      sortParam.pricing = 1;
      break;
  }

  console.log("sortParam",sortParam);

  return await studentRepository.findCourses(filters, sortParam);
};

const getCourseDetailsById = async (id) => {
  return await studentRepository.findCourseById(id);
};

module.exports = {
  getAllCourses,
  getCourseDetailsById,
};
