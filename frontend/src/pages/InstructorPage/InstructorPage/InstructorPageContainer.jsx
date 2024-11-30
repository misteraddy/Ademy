import React, { useContext, useEffect, useState } from "react";
import InstructorDashBoardPage from "../../../components/instructor-view/dashboard/InstructorDashBoardPage";
import InstructorCourses from "@/components/instructor-view/courses/InstructorCourses";
import { BarChart, Book, LogOut } from "lucide-react";
import InstructorPage from "./InstructorPage";
import { InstructorContext } from "@/context/instructorcontext";
import { fetchInstructorCourseListService } from "@/services/services";
import { useNavigate } from "react-router-dom";

function InstructorPageContainer() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigate = useNavigate();

  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();

    if(response?.success)
    {
      setInstructorCoursesList(response?.data);
    }
  }



  useEffect(() => {
    fetchAllCourses();
  },[])

  function handleLogout() {
    navigate(-1);
  }

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
