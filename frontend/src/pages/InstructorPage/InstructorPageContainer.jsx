import React, { useState } from "react";
import InstructorDashBoardPage from "../../components/instructor-view/dashboard/InstructorDashBoardPage";
import InstructorCourses from "@/components/instructor-view/courses/InstructorCourses";
import { BarChart, Book, LogOut } from "lucide-react";
import InstructorPage from "./InstructorPage";

function InstructorPageContainer() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const instructorCoursesList = null;

  function handleLogout() {}

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: (
        <InstructorDashBoardPage listOfCourses={instructorCoursesList} />
      ),
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  return (
    <>
      <InstructorPage
        menuItems={menuItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}

export default InstructorPageContainer;
