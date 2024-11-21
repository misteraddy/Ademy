import { createContext, useEffect, useState } from "react";
import { registerUser, loginUser } from "@/services/services";
import { initialSignInFormData, initialSignUpFormData } from "@/config/config";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  const [loading, setLoading] = useState(true);


  async function handleRegisterUser(event) {
    event.preventDefault();
    try {
      const data = await registerUser(signUpFormData);
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    try {
      const data = await loginUser(signInFormData);

      if (data.success) {
        sessionStorage.setItem("accessToken", JSON.stringify(data.data.accessToken));
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        console.log("Login successful:", data);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
