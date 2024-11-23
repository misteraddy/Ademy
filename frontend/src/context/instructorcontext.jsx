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

  return (
    <InstructorContext.Provider
      value={{
        courseLandingFormData,
        courseCurriculumFormData,
        setCourseLandingFormData,
        setCourseCurriculumFormData,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
}
