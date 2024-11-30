import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
  const [courseLandingFormData, setCourseLandingFormData] = useState(
    courseLandingInitialFormData
  );

  const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(
    courseCurriculumInitialFormData
  );

  const [mediaUploadProgress,setMediaUploadProgress] = useState(false);

  const [mediaUploadProgressPercentage,setMediaUploadProgressPercentage] = useState(0);

  const [instructorCoursesList,setInstructorCoursesList] = useState([]);

  const [currentEditedCourseId,setCurrentEditedCourseId] = useState();

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        courseCurriculumFormData,
        currentEditedCourseId,
        setCourseLandingFormData,
        setCourseCurriculumFormData,
        instructorCoursesList,
        setInstructorCoursesList,
        setCurrentEditedCourseId
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
