import React from "react";
import banner from "../../../assets/banner.jpeg";
import { courseCategories } from "@/config/config";
import { Button } from "@/components/ui/button";
import CourseListNotFound from "../../NotFound/CourseListNotFound";

function StudentHome({ handleNavigateToCoursesPage, studentViewCoursesList }) {
  console.log(studentViewCoursesList);

  return (
    <div className="min-h-screen">
      <section className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Learning
            </span>{" "}
            that gets you
          </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl xs:text-sm xs:my-5 dark:text-gray-400">
            Skills for your present and your future. Get Started with US
          </p>
        </div>
        <div className="lg:w-full mb-8 lg:mb-0">
          <img
            src={banner}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="py-8 px-4 lg:px-8 dark:bg-[#262626] border">
        <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {courseCategories.map((categoryItem) => (
            <Button
              className="justify-start shadow-xl border"
              variant="outline"
              key={categoryItem.id}
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
            >
              {categoryItem.label}
            </Button>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Featured Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
            studentViewCoursesList.map((courseItem) => {
              return (
                <div className="border rounded-lg overflow-hidden shadow cursor-pointer">
                  <img
                    src={courseItem?.image}
                    width={300}
                    height={150}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{courseItem?.title}</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      {courseItem?.instructorName}
                    </p>
                    <p className="font-bold text-[16px]">
                      {courseItem?.pricing}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <CourseListNotFound />
          )}
        </div>
      </section>
    </div>
  );
}

export default StudentHome;
