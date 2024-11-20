import axiosInstance from "@/api/axiosInstance";
import { initialSignInFormData, initialSignUpFormData } from "@/config/config";
import { registerUser } from "@/services/services";
import { createContext, useState } from "react";

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
    const data = registerUser(signUpFormData);

    console.log(data);

    return data;
  }

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
