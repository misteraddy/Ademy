import React, { useContext, useEffect, useState } from "react";
import StudentViewCourseDetailsPage from "./StudentViewCourseDetailsPage";
import { StudentContext } from "../../../context/studentcontext";
import { useParams } from "react-router-dom";
import {
  createPaymentService,
  fetchStudentViewCourseDetailsService,
} from "@/services/services";

function StudentViewCourseDetailsPageContainer() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
  } = useContext(StudentContext);

  const { id } = useParams();

  const [displayVideoPreview, setDisplayVideoPreview] = useState(null);

  const [showPreviewDialog, setShowPreviewDialog] = useState(false);

  const [approvalUrl, setApprovalUrl] = useState("");

  async function fetchStudentViewCourseDetails() {
    const response = await fetchStudentViewCourseDetailsService(
      currentCourseDetailsId
    );

    if (response?.success) {
      setStudentViewCourseDetails(response?.data);
    } else {
      setStudentViewCourseDetails(null);
    }
  }

  function handleSetFreePreview(videoInfo) {
    setDisplayVideoPreview(videoInfo?.videoUrl);
    setShowPreviewDialog(true);
  }

  async function handleCreatePayment() {
    const paymentPayload = {
      userId: "userId",
      userName: "userName",
      userEmail: "dummy",
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "initiated",
      orderDate: new Date(),
      paymentId: "",
      payerId: "",
      instructorId: studentViewCourseDetails?.instructorId,
      instructorName: studentViewCourseDetails?.instructorName,
      courseImage: studentViewCourseDetails?.image,
      courseTitle: studentViewCourseDetails?.title,
      courseId: studentViewCourseDetails?._id,
      coursePricing: studentViewCourseDetails?.pricing,
    };

    const response = await createPaymentService(paymentPayload);

    console.log("payment response",response);

    if (response?.success) {
      sessionStorage.setItem(
        "currentOrderId",
        JSON.stringify(response?.data?.orderId)
      );
      setApprovalUrl(response?.data?.approveUrl);
    }
  }

  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
  }, [currentCourseDetailsId]);

  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id]);

  useEffect(() => {
    if (!location.pathname.includes("course/details")) {
      setStudentViewCourseDetails(null);
      setCurrentCourseDetailsId(null);
    }
  }, [location.pathname]);

  console.log(approvalUrl);

  if (approvalUrl !== "") {
    window.location.href = approvalUrl;
  }

  return (
    <div>
      <StudentViewCourseDetailsPage
        courseDetails={studentViewCourseDetails}
        displayVideoPreview={displayVideoPreview}
        showPreviewDialog={showPreviewDialog}
        setDisplayVideoPreview={setDisplayVideoPreview}
        setShowPreviewDialog={setShowPreviewDialog}
        onSetFreePreview={handleSetFreePreview}
        onCreatePayment={handleCreatePayment}
      />
    </div>
  );
}

export default StudentViewCourseDetailsPageContainer;
