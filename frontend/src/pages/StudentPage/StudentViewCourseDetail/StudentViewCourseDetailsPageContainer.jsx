import React, { useContext } from "react";
import StudentViewCourseDetailsPage from "./StudentViewCourseDetailsPage";
import { StudentContext } from "../../../context/studentcontext";
import { useParams } from "react-router-dom";

function StudentViewCourseDetailsPageContainer() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetails,
    setCurrentCourseDetails,
  } = useContext(StudentContext);

  const params = useParams();

  return (
    <div>
      <StudentViewCourseDetailsPage />
    </div>
  );
}

export default StudentViewCourseDetailsPageContainer;
