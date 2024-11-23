import FormControls from "@/components/common-form/FormControls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config/config";
import { InstructorContext } from "@/context/instructorcontext";
import React, { useContext } from "react";

function CourseLandingPage() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <FormControls
          formControls={courseLandingPageFormControls}
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
        />
      </CardContent>
    </Card>
  );
}

export default CourseLandingPage;
