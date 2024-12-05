const courseProgressRepository = require("../repositories/courseProgressRepository");

const markCurrentLectureAsViewed = async (userId, courseId, lectureId) => {
  if (!userId) throw new Error("User ID is required.");
  if (!courseId) throw new Error("Course ID is required.");
  if (!lectureId) throw new Error("Lecture ID is required.");

  const courseProgress = await courseProgressRepository.findCourseProgress(userId, courseId);

  if (!courseProgress) {
    throw new Error("Course progress not found.");
  }

  const lecture = courseProgress.lecturesProgress.find(
    (lecture) => lecture.lectureId === lectureId
  );

  if (!lecture) {
    throw new Error("Lecture not found.");
  }

  if (!lecture.viewed) {
    lecture.viewed = true;
    lecture.dateViewed = new Date();
  }

  const allViewed = courseProgress.lecturesProgress.every((lecture) => lecture.viewed);
  if (allViewed) {
    courseProgress.completed = true;
    courseProgress.completionDate = new Date();
  }

  return courseProgressRepository.saveCourseProgress(courseProgress);
};

const getCurrentCourseProgress = async (userId, courseId) => {
  if (!userId) throw new Error("User ID is required.");
  if (!courseId) throw new Error("Course ID is required.");

  const courseProgress = await courseProgressRepository.findCourseProgress(userId, courseId);

  if (!courseProgress) {
    throw new Error("Course progress not found.");
  }

  return courseProgress;
};

const resetCurrentCourseProgress = async (userId, courseId) => {
  if (!userId) throw new Error("User ID is required.");
  if (!courseId) throw new Error("Course ID is required.");

  const courseProgress = await courseProgressRepository.findCourseProgress(userId, courseId);

  if (!courseProgress) {
    throw new Error("Course progress not found.");
  }

  courseProgress.completed = false;
  courseProgress.completionDate = null;
  courseProgress.lecturesProgress.forEach((lecture) => {
    lecture.viewed = false;
    lecture.dateViewed = null;
  });

  return await courseProgressRepository.saveCourseProgress(courseProgress);
};

module.exports = {
  markCurrentLectureAsViewed,
  getCurrentCourseProgress,
  resetCurrentCourseProgress,
};
