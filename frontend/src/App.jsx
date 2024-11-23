import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import InstructorPageContainer from "./pages/InstructorPage/InstructorPageContainer";
import AddNewCoursePage from "./pages/InstructorPage/AddNewCoursePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/instructor" element={< InstructorPageContainer/>}/>
        <Route path="/instructor/new" element={<AddNewCoursePage/>}/>
      </Routes>
    </>
  );
}

export default App;
