import React, { useContext } from "react";
import CourseCurriculum from "./CourseCurriculum";
import { courseCurriculumInitialFormData } from "@/config/config";
import { InstructorContext } from "@/context/instructorcontext";

function CourseCurriculumContainer() {
  const { courseCurriculumFormData, setCourseCurriculumFormData } =
    useContext(InstructorContext);

  console.log(courseCurriculumFormData);

  function handleNewLecture() {
    console.log("callign ");

    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  }

  return (
    <CourseCurriculum
      handleNewLecture={handleNewLecture}
      courseCurriculumFormData={courseCurriculumFormData}
      setCourseCurriculumFormData={setCourseCurriculumFormData}
    />
  );
}

export default CourseCurriculumContainer;
