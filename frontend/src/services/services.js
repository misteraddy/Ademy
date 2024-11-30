import axiosInstance from "@/api/axiosInstance";

export async function registerUser(formData) {
  try {
    const { data } = await axiosInstance.post("/auth/signup", {
      ...formData,
      role: "user",
    });
    return data;
  } catch (error) {
    console.error(
      "Error in registerUser:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function loginUser(formData) {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      ...formData,
    });
    return data;
  } catch (error) {
    console.error("Error in loginUser:", error.response?.data || error.message);
    throw error;
  }
}

export async function checkUser(formData) {
  try {
    const { data } = await axiosInstance.get("/check-user", {
      ...formData,
    });
    return data;
  } catch (error) {
    console.error("Error in loginUser:", error.response?.data || error.message);
    throw error;
  }
}

export async function mediaUploadService(formData) {
  try {
    const { data } = await axiosInstance.post(
      "/media/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return data;
  } catch (error) {
    console.error(
      "Error in mediaUploadService:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function mediaDeleteService(id) {
  try {

    const { data } = await axiosInstance.delete(`/media/delete/${id}`);

    return data ;

  } catch (error) {
    console.error(
      "Error in mediaDeleteService:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function fetchInstructorCourseListService() {
  const { data } = await axiosInstance.get(`/instructor/course/get`);

  return data;
}

export async function addNewCourseService(formData) {
  const { data } = await axiosInstance.post(`/instructor/course/add`, formData);

  return data;
}

export async function fetchInstructorCourseDetailsService(id) {
  const { data } = await axiosInstance.get(
    `/instructor/course/get/details/${id}`
  );

  return data;
}

export async function updateCourseByIdService(id, formData) {
  const { data } = await axiosInstance.put(
    `/instructor/course/update/${id}`,
    formData
  );

  return data;
}

export async function fetchStudentViewCourseListService(query) {
  const { data } = await axiosInstance.get(`/student/course/get?${query}`);

  return data;
}
