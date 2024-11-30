import React, { useContext } from "react";
import CourseCurriculum from "./CourseCurriculum";
import { courseCurriculumInitialFormData } from "@/config/config";
import { InstructorContext } from "@/context/instructorcontext";
import { mediaDeleteService, mediaUploadService } from "@/services/services";

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
    console.log("called");
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];
    cpyCourseCurriculumFormData[index] = {
      ...cpyCourseCurriculumFormData[index],
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
          videoUrl: response?.data?.url,
          public_id: response?.data?.public_id,
        };
        setCourseCurriculumFormData(cpyCourseCurriculumFormData);
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    }
  }

  function isCurriculumFormDataValid() {
    return courseCurriculumFormData.every((item) => {
      return (
        item &&
        typeof item == "object" &&
        item?.title?.trim() !== "" &&
        item?.videoUrl?.trim() != ""
      );
    });
  }

  async function handleReplaceVideo(index) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];

    const getCurrentVideoPublicId =
      cpyCourseCurriculumFormData[index]?.public_id;

    const deleteCurrentMediaResponse = await mediaDeleteService(
      getCurrentVideoPublicId
    );

    console.log(deleteCurrentMediaResponse);

    if (deleteCurrentMediaResponse.success) {
      cpyCourseCurriculumFormData[index] = {
        ...cpyCourseCurriculumFormData[index],
        videoUrl: "",
        public_id: "",
      };

      setCourseCurriculumFormData(cpyCourseCurriculumFormData);
    }
  }

  async function handleDeleteLecture(currIndex) {
    let cpyCourseCurriculumFormData = [...courseCurriculumFormData];

    const getCurrentVideoPublicId =
      cpyCourseCurriculumFormData[currIndex]?.public_id;

    const deleteCurrentMediaResponse = await mediaDeleteService(
      getCurrentVideoPublicId
    );

    if (deleteCurrentMediaResponse.success) {
      cpyCourseCurriculumFormData = cpyCourseCurriculumFormData.filter(
        (_, index) => index !== currIndex
      );

      setCourseCurriculumFormData(cpyCourseCurriculumFormData);
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
      isCurriculumFormDataValid={isCurriculumFormDataValid}
      handleReplaceVideo={handleReplaceVideo}
      handleDeleteLecture={handleDeleteLecture}
    />
  );
}

export default CourseCurriculumContainer;
