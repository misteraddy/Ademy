import React, { useContext } from "react";
import CourseCurriculum from "./CourseCurriculum";
import { courseCurriculumInitialFormData } from "@/config/config";
import { InstructorContext } from "@/context/instructorcontext";
import { mediaUploadService } from "@/services/services";

function CourseCurriculumContainer() {
  const { courseCurriculumFormData, setCourseCurriculumFormData } =
    useContext(InstructorContext);

  console.log(courseCurriculumFormData);

  function handleNewLecture() {
    setCourseCurriculumFormData([
      ...courseCurriculumFormData,
      {
        ...courseCurriculumInitialFormData[0],
      },
    ]);
  }

  function handleCourseTitleChange(event, index) {
    const cpyCourseCurriculumFormData = [...courseCurriculumFormData];

    cpyCourseCurriculumFormData[index] = {
      ...cpyCourseCurriculumFormData[index],
      title: event.target.value,
    };

    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  }

  function handleFreePreviewChange(value, index) {
    const cpyCourseCurriculumFormData = [...courseCurriculumFormData];

    cpyCourseCurriculumFormData[index] = {
      ...cpyCourseCurriculumFormData,
      freePreview: value,
    };

    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
  }

  async function handleSingleLectureUpload(event, index) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const videoFormData = new FormData();
      videoFormData.append("file", selectedFile);

      for (let [key, value] of videoFormData.entries()) {
        console.log(`${key}:`, value);
      }

      try {
        const response = await mediaUploadService(videoFormData);
        console.log("Upload successful:", response);

        const cpyCourseCurriculumFormData = [...courseCurriculumFormData];
        cpyCourseCurriculumFormData[index] = {
          ...cpyCourseCurriculumFormData[index],
          videoUrl: response.fileUrl, 
        };
        setCourseCurriculumFormData(cpyCourseCurriculumFormData);
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    }
  }

  return (
    <CourseCurriculum
      handleNewLecture={handleNewLecture}
      courseCurriculumFormData={courseCurriculumFormData}
      setCourseCurriculumFormData={setCourseCurriculumFormData}
      handleCourseTitleChange={handleCourseTitleChange}
      handleFreePreviewChange={handleFreePreviewChange}
      handleSingleLectureUpload={handleSingleLectureUpload}
    />
  );
}

export default CourseCurriculumContainer;
