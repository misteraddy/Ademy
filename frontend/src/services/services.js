import axiosInstance from "@/api/axiosInstance";

export async function registerUser(formData) {
  const { data } = await axiosInstance.post("/api/v1/auth/signup", {
    ...formData,
    role: "user",
  });

  return data;
}
