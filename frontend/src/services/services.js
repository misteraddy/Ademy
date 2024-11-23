import axiosInstance from "@/api/axiosInstance";

export async function registerUser(formData) {
  try {
    const { data } = await axiosInstance.post("/api/v1/auth/signup", {
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
    const { data } = await axiosInstance.post("/api/v1/auth/login", {
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
    const { data } = await axiosInstance.get("/api/v1/check-user", {
      ...formData,
    });
    return data;
  } catch (error) {
    console.error("Error in loginUser:", error.response?.data || error.message);
    throw error;
  }
}
