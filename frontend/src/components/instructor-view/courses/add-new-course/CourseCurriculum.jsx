import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstructorContext } from "@/context/instructorcontext";
import React, { useContext } from "react";

function CourseCurriculum() {
  const { courseCurriculumFormData, setCourseCurriculumFormData } =
    useContext(InstructorContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Curriculum</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Add Lecture</Button>
        <div>
            {}
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseCurriculum;
