import React, { useContext, useEffect } from "react";
import AddNewCoursePage from "./AddNewCoursePage";
import { InstructorContext } from "@/context/instructorcontext";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
} from "@/services/services";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config/config";
import { useNavigate, useParams } from "react-router-dom";

function AddNewCoursePageContainer() {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
  }, [params?.courseId]);

  useEffect(() => {
    if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
  }, [currentEditedCourseId]);

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
        hasFreePreview = true;
      }
    }

    return hasFreePreview;
  }

  //making the function reusable for both the edit course and update course if there is course id in the 
  //param then the same page is that was used before as the create new c

  async function handleCreateCourse() {
    const courseFinalFormData = {
      instructorId: "things",
      instructorName: "bigchill",
      date: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublised: true,
    };

    let response;
    if (currentEditedCourseId !== null) {
      console.log("i update");
      response = await updateCourseByIdService(currentEditedCourseId,courseFinalFormData);
    } else {
      console.log("i course");
      response = await addNewCourseService(courseFinalFormData);
    }

    console.log(response);

    if (response?.success) {
      setCourseLandingFormData(courseLandingInitialFormData);
      setCourseCurriculumFormData(courseCurriculumInitialFormData);
      navigate(-1);
      setCurrentEditedCourseId(null);
    }
  }

  async function fetchCurrentCourseDetails() {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );

    if (response?.success) {
      const setCourseFormData = Object.keys(
        courseLandingInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || courseLandingInitialFormData[key];

        return acc;
      }, {});

      setCourseLandingFormData(setCourseFormData);
      setCourseCurriculumFormData(response?.data?.curriculum);
    }
  }

  return (
    <>
      <AddNewCoursePage
        validateFormData={validateFormData}
        handleCreateCourse={handleCreateCourse}
      />
    </>
  );
}

export default AddNewCoursePageContainer;
