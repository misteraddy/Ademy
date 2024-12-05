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
import RouteGuard from "./components/route-guard/RouteGuard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route
          path="/instructor"
          element={<RouteGuard element={<InstructorPageContainer />} />}
        />
        <Route
          path="/instructor/new"
          element={<RouteGuard element={<AddNewCoursePageContainer />} />}
        />
        <Route
          path="/instructor/edit/:courseId"
          element={<RouteGuard element={<AddNewCoursePageContainer />} />}
        />

        <Route
          path="/student"
          element={<RouteGuard element={<StudentViewCommonLayout />} />}
        >
          <Route index element={<StudentHomeContainer />} />
          <Route path="course" element={<StudentViewCoursePageContainer />} />
          <Route
            path="course/details/:id"
            element={<StudentViewCourseDetailsPageContainer />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
