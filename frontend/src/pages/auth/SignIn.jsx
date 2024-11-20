import CommonForm from "@/components/common-form/CommonForm";
import { signInFormControls } from "@/config/config";
import { AuthContext } from "@/context/authcontext";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ toggleForm }) => {
  const navigate = useNavigate();

  const { signInFormData, setSignInFormData } = useContext(AuthContext);

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  const [formErrors, setFormErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const errors = {};

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    try {
      const response = await fakeSignIn(formData.email, formData.password);
      if (response.success) {
        console.log("User signed in successfully!");
        navigate("/home");
      } else {
        setFormErrors({
          general: "Sign-in failed. Please check your credentials.",
        });
      }
    } catch (error) {
      setFormErrors({ general: "An error occurred. Please try again later." });
    }
  };

  async function fakeSignIn(email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }

  return (
    <div className="w-full max-w-md rounded-lg border bg-white dark:bg-black dark:border-white xs:h-[300px] xs:w-96">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Sign In
        </h2>
        {formErrors.general && (
          <div className="mt-4 text-red-500">{formErrors.general}</div>
        )}
        <CommonForm
          handleSubmit={handleSubmit}
          buttonText="Sign In"
          formControls={signInFormControls}
          formData={signInFormData}
          setFormData={setSignInFormData}
          formErrors={formErrors}
          isButtonDisabled={!checkIfSignInFormIsValid()}
        />
      </div>
    </div>
  );
};

export default SignIn;
