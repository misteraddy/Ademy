import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Globe, Lock, PlayCircle } from "lucide-react";
import VideoPlayer from "@/components/videoplayer/VideoPlayerContainer";

function StudentViewCourseDetails({
  courseDetails,
  onSetFreePreview,
  onCreatePayment,
  displayVideoPreview,
  showPreviewDialog,
  setShowPreviewDialog,
}) {
  // Logic was used to find the first curriculum item marked for free preview.
  const getIndexOfFreePreviewUrl = courseDetails?.curriculum?.findIndex(
    (item) => item.freePreview
  );

  return (
    <div className=" mx-auto p-4">
      <div className="bg-black dark:bg-gray-400 text-white dark:text-black p-8 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-4">{courseDetails?.title}</h1>
        <p className="text-xl mb-4">{courseDetails?.subtitle}</p>
        <div className="flex items-center space-x-4 mt-2 text-sm">
          <span>Created By {courseDetails?.instructorName}</span>
          <span>Created On {courseDetails?.date.split("T")[0]}</span>
          <span className="flex items-center">
            <Globe className="mr-1 h-4 w-4" />
            {courseDetails?.primaryLanguage}
          </span>
          <span>
            {courseDetails?.students.length}{" "}
            {courseDetails?.students.length <= 1 ? "Student" : "Students"}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <main className="flex-grow">
          <Card className="mb-8 dark:border-white">
            <CardHeader>
              <CardTitle>What you'll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {courseDetails?.objectives
                  .split(",")
                  .map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-8 dark:border-gray-400">
            <CardHeader>
              <CardTitle>Course Description</CardTitle>
            </CardHeader>
            <CardContent>{courseDetails?.description}</CardContent>
          </Card>
          <Card className="mb-8 dark:border-gray-400">
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Rendered the curriculum items as a list */}
              <ul>
                {courseDetails?.curriculum?.map((curriculumItem, index) => (
                  <li
                    key={index}
                    className={`${
                      curriculumItem?.freePreview
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } flex items-center mb-4`}
                    onClick={
                      curriculumItem?.freePreview
                        ? () => onSetFreePreview(curriculumItem)
                        : null
                    }
                  >
                    {curriculumItem?.freePreview ? (
                      <PlayCircle className="mr-2 h-4 w-4" />
                    ) : (
                      <Lock className="mr-2 h-4 w-4" />
                    )}
                    <span>{curriculumItem?.title}</span>
                  </li>
                ))}
              </ul>
              {/* Each item had conditional styling and click handling for free previews */}
            </CardContent>
          </Card>
        </main>
        <aside className="w-full md:w-[500px] ">
          <Card className="sticky top-4 shadow-2xl dark:border-gray-400">
            <CardContent className="p-6">
              <div className="aspect-video mb-4 rounded-lg flex items-center justify-center">
                <VideoPlayer
                  url={
                    getIndexOfFreePreviewUrl !== -1
                      ? courseDetails?.curriculum[getIndexOfFreePreviewUrl]
                          .videoUrl
                      : ""
                  }
                  width="450px"
                  height="200px"
                />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">
                  ${courseDetails?.pricing}
                </span>
              </div>
              <Button onClick={onCreatePayment} className="w-full">
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
      <Dialog
        open={showPreviewDialog}
        onOpenChange={() => setShowPreviewDialog(false)}
      >
        <DialogContent className="w-[800px]">
          <DialogHeader>
            <DialogTitle>Course Preview</DialogTitle>
          </DialogHeader>
          <div className="aspect-video rounded-lg flex items-center justify-center">
            <VideoPlayer
              url={displayVideoPreview}
              width="450px"
              height="200px"
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StudentViewCourseDetails;
