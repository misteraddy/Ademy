import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import VideoPlayerContainer from "@/components/videoplayer/VideoPlayerContainer";
import React, { useContext } from "react";

function CourseCurriculum({
  handleNewLecture,
  setCourseCurriculumFormData,
  courseCurriculumFormData,
  handleSingleLectureUpload,
  handleFreePreviewChange,
  handleCourseTitleChange,
  isCurriculumFormDataValid,
  handleReplaceVideo,
  handleDeleteLecture,
}) {
  console.log(courseCurriculumFormData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Curriculum</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          disabled={!isCurriculumFormDataValid()}
          onClick={handleNewLecture}
        >
          Add Lecture
        </Button>
        <div>
          {courseCurriculumFormData.map((curriculumData, index) => (
            <div key={index} className="border p-5 rounded-md">
              <div className="flex gap-5 items-center">
                <h3 className="font-semibold">{`Lecture ${index + 1}`}</h3>
                <Input
                  name={`title-${index + 1}`}
                  placeholder="Enter lecture title"
                  className="max-w-96"
                  onChange={(event) => handleCourseTitleChange(event, index)}
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
                <div className="mt-6">
                  {courseCurriculumFormData[index]?.videoUrl ? (
                    <div className="flex gap-3">
                      <VideoPlayerContainer
                        url={courseCurriculumFormData[index]?.videoUrl}
                        width="450px"
                        height="200px"
                      />
                      <Button onClick={() => handleReplaceVideo(index)}>
                        Replace video
                      </Button>
                      <Button
                        onClick={() => handleDeleteLecture(index)}
                        className="bg-red-900"
                      >
                        Delete video
                      </Button>
                    </div>
                  ) : (
                    <Input
                      type="file"
                      accept="video/*"
                      onChange={(event) =>
                        handleSingleLectureUpload(event, index)
                      }
                    />
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseCurriculum;
