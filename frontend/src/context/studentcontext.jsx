import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [studentViewCoursesList, setStudentViewCoursesList] = useState([]);
  const [studentViewCourseDetails, setStudentViewCourseDetails] = useState();
  const [currentCourseDetails, setCurrentCourseDetails] = useState();

  return (
    <StudentContext.Provider
      value={{
        studentViewCoursesList,
        setStudentViewCoursesList,
        studentViewCourseDetails,
        setStudentViewCourseDetails,
        currentCourseDetails,
        setCurrentCourseDetails,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
