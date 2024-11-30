import React from "react";
import StudentHome from "./StudentHome";

function StudentHomeContainer() {
  function handleNavigateToCoursesPage() {}

  const studentViewCoursesList = [
    {
      id: "course1",
      title: "React for Beginners",
      instructorName: "John Doe",
      pricing: "$49.99",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/chill-guy-memes-have-flooded-social-media-241142207-16x9_0.jpg?VersionId=.osD_GpxkoPy9zvr5i97YYdKPrDZAtG_&size=690:388",
    },
    {
      id: "course2",
      title: "Data Science Bootcamp",
      instructorName: "Jane Smith",
      pricing: "$99.99",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/chill-guy-memes-have-flooded-social-media-241142207-16x9_0.jpg?VersionId=.osD_GpxkoPy9zvr5i97YYdKPrDZAtG_&size=690:388",
    },
    {
      id: "course3",
      title: "Intro to Machine Learning",
      instructorName: "Alice Johnson",
      pricing: "$79.99",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/chill-guy-memes-have-flooded-social-media-241142207-16x9_0.jpg?VersionId=.osD_GpxkoPy9zvr5i97YYdKPrDZAtG_&size=690:388",
    },
    {
      id: "course4",
      title: "Advanced Cybersecurity Techniques",
      instructorName: "Bob Williams",
      pricing: "$89.99",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/chill-guy-memes-have-flooded-social-media-241142207-16x9_0.jpg?VersionId=.osD_GpxkoPy9zvr5i97YYdKPrDZAtG_&size=690:388",
    },
  ];

  return (
    <>
      <StudentHome
        handleNavigateToCoursesPage={handleNavigateToCoursesPage}
        studentViewCoursesList={studentViewCoursesList}
      />
    </>
  );
}

export default StudentHomeContainer;
