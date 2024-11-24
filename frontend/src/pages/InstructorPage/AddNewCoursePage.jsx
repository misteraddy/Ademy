import CourseCurriculumContainer from "@/components/instructor-view/courses/add-new-course/CourseCurriculumContainer";
import CourseLandingPage from "@/components/instructor-view/courses/add-new-course/CourseLandingPage";
import CourseSetting from "@/components/instructor-view/courses/add-new-course/CourseSetting";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function AddNewCoursePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
        <Button className="text-sm tracking-wider font-bold px-8">
          Submit
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="courselandingpage">
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                {<CourseCurriculumContainer />}
              </TabsContent>
              <TabsContent value="courselandingpage">
                {<CourseLandingPage />}
              </TabsContent>
              <TabsContent value="settings">{<CourseSetting />}</TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddNewCoursePage;
