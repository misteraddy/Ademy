import React, { useContext } from "react";
import CourseSetting from "./CourseSetting";
import { mediaUploadService } from "@/services/services";
import { InstructorContext } from "@/context/instructorcontext";

function CourseSettingContainer() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  async function handleImageUploadChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log("Entered");
      const imageFormData = new FormData();
      imageFormData.append("file", selectedFile);
      const response = await mediaUploadService(imageFormData);

      if (response.success) {
        setCourseLandingFormData({
          ...courseLandingFormData,
          image: response.data.url,
        });
      }
    }
  }

  return (
    <>
      <CourseSetting handleImageUploadChange={handleImageUploadChange} />
    </>
  );
}

export default CourseSettingContainer;
