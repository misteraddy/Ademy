import React, { useContext, useEffect, useState } from "react";
import StudentViewCoursePage from "./StudentViewCoursePage";
import { StudentContext } from "@/context/studentcontext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchStudentViewCourseListService } from "../../../services/services";

function StudentViewCoursePageContainer() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const { studentViewCoursesList, setStudentViewCoursesList } =
  useContext(StudentContext);

    function createSearchParamsHelper(filterParams) {
      const queryParams = [];
    
      for (const [key, value] of Object.entries(filterParams)) {
        if (Array.isArray(value) && value.length > 0) {
          const paramValue = value.join(",");
    
          queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
        }
      }
    
      return queryParams.join("&");
    }

  function handleFilterOnChange(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSeection =
      Object.keys(cpyFilters).indexOf(getSectionId);

    console.log(indexOfCurrentSeection, getSectionId);
    if (indexOfCurrentSeection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption.id],
      };

      console.log(cpyFilters);
    } else {
      const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(
        getCurrentOption.id
      );

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption.id);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  async function fetchAllStudentViewCourses(filters, sort) {
    console.log("called");
    const query = new URLSearchParams({
      ...filters,
      sortBy: sort,
    });
    const response = await fetchStudentViewCourseListService(query);
  
    console.log(response);
  
    if (response?.success) {
      setStudentViewCoursesList(response?.data);
    } else {
      setStudentViewCoursesList([]);
      console.log(response?.message);
    }
  }

  useEffect(() => {
    const buildQueryStringForFilters = createSearchParamsHelper(filters);
    setSearchParams(new URLSearchParams(buildQueryStringForFilters));
  }, [filters]);

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters !== null && sort !== null)
      fetchAllStudentViewCourses(filters, sort);
  }, [filters, sort]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("filters");
    };
  }, []);

  return (
    <>
      <StudentViewCoursePage
        sort={sort}
        filters={filters}
        setSort={setSort}
        handleFilterOnChange={handleFilterOnChange}
        fetchAllStudentViewCourses={fetchAllStudentViewCourses}
      />
    </>
  );
}

export default StudentViewCoursePageContainer;
