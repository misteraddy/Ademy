import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "@/context/studentcontext";
import StudentCourses from "./StudentCourses";

function StudentCoursesContainer() {

  const { studentBoughtCoursesList, setStudentBoughtCoursesList } =
    useContext(StudentContext);
  const navigate = useNavigate();

  async function fetchStudentBoughtCourses() {
    // const response = await fetchStudentBoughtCoursesService(auth?.user?._id);
    // if (response?.success) {
    //   setStudentBoughtCoursesList(response?.data);
    // }
    // console.log(response);
  }

  useEffect(() => {
    fetchStudentBoughtCourses();
  }, []);

  return (
    <StudentCourses
      courses={studentBoughtCoursesList || []}
      navigate={navigate}
    />
  );
}

export default StudentCoursesContainer;
