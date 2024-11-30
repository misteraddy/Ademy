import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import InstructorPageContainer from "./pages/InstructorPage/InstructorPage/InstructorPageContainer";
import AddNewCoursePageContainer from "./pages/InstructorPage/AddNewCoursePage/AddNewCoursePageContainer";
import StudentHomeContainer from "./pages/StudentPage/StudentViewHome/StudentHomeContainer";
import StudentViewCommonLayout from "./components/student-view/StudentViewCommonLayout";
import StudentViewCoursePageContainer from "./pages/StudentPage/StudentViewCourse/StudentViewCoursePageContainer";
import StudentViewCourseDetailsPageContainer from "./pages/StudentPage/StudentViewCourseDetail/StudentViewCourseDetailsPageContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/instructor" element={<InstructorPageContainer />} />
        <Route path="/instructor/new" element={<AddNewCoursePageContainer />} />
        <Route
          path="/instructor/edit/:courseId"
          element={<AddNewCoursePageContainer />}
        />
        <Route path="/student" element={<StudentViewCommonLayout />}>
          <Route path="/student" element={<StudentHomeContainer />} />
          <Route path="/student/courses" element={<StudentViewCoursePageContainer/>}/>
          <Route path="/student/course/details/:id" element={<StudentViewCourseDetailsPageContainer/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
