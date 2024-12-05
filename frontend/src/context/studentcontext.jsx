import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export default function StudentProvider({ children }) {
  const [studentViewCoursesList, setStudentViewCoursesList] = useState([]);
  const [studentViewCourseDetails, setStudentViewCourseDetails] = useState();
  const [currentCourseDetailsId, setCurrentCourseDetailsId] = useState();
  
  const staticCourses = [
    {
      id: "1",
      courseId: "course1",
      courseImage: "https://via.placeholder.com/150",
      title: "React for Beginners",
      instructorName: "John Doe",
    },
    {
      id: "2",
      courseId: "course2",
      courseImage: "https://via.placeholder.com/150",
      title: "Advanced JavaScript",
      instructorName: "Jane Smith",
    },
  ];
  
  const [studentBoughtCoursesList,setStudentBoughtCoursesList] = useState(staticCourses);
  return (
    <StudentContext.Provider
      value={{
        studentViewCoursesList,
        setStudentViewCoursesList,
        studentViewCourseDetails,
        setStudentViewCourseDetails,
        currentCourseDetailsId,
        setCurrentCourseDetailsId,
        studentBoughtCoursesList,
        setStudentBoughtCoursesList
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
