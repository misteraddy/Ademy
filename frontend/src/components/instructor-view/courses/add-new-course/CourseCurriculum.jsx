import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useContext } from "react";

function CourseCurriculum({
  handleNewLecture,
  setCourseCurriculumFormData,
  courseCurriculumFormData,
  handleSingleLectureUpload,
  handleFreePreviewChange,
  handleCourseTitleChange,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Curriculum</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={handleNewLecture}>Add Lecture</Button>
        <div>
          {courseCurriculumFormData.map((curriculumData, index) => (
            <div key={index} className="border p-5 rounded-md">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">{`Lecture ${index + 1}`}</h3>
                <Input
                  name={`title-${index + 1}`}
                  placeholder="Enter lecture title"
                  className="max-w-96"
                  onChange={(event) => handleCourseTitleChange(event,index)}
                />
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={courseCurriculumFormData[index]?.freePreview}
                    id={`freePreview-${index + 1}`}
                    onCheckedChange={(value) =>
                      handleFreePreviewChange(value, index)
                    }
                  />
                  <Label htmlFor={`curriculumData.freePreview-${index + 1}`}>
                    Free Preview
                  </Label>
                </div>
              </div>

              <Card>
                <Input
                  type="file"
                  accept="video/*"
                  onChange={(event) => handleSingleLectureUpload(event, index)}
                />
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseCurriculum;
