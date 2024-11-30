import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/instructorcontext";
import { mediaUploadService } from "@/services/services";
import React, { useContext } from "react";

function CourseSetting({ handleImageUploadChange }) {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {courseLandingFormData?.image ? (
            <img src={courseLandingFormData?.image} />
          ) : (
            <>
              <Label>Upload Course Image</Label>
              <Input
                onChange={handleImageUploadChange}
                type="file"
                accept="image/*"
              />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseSetting;
