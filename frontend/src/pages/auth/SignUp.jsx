import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonForm from "@/components/common-form/CommonForm";
import { signUpFormControls } from "@/config/config";
import { AuthContext } from "@/context/authcontext";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUpFormData, setSignUpFormData, handleRegisterUser } = useContext(AuthContext);

  // Form validation logic
  const [formErrors, setFormErrors] = useState({});
  
  const checkIfSignUpFormIsValid = () => {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== "" 
    );
  };

  return (
    <div className="w-full max-w-md rounded-lg border bg-white dark:bg-black dark:border-white xs:h-[320px] xs:w-96">
      <div className="px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
          Sign Up
        </h2>
        {formErrors.general && (
          <div className="mt-4 text-red-500">{formErrors.general}</div>
        )}
        <CommonForm
          handleSubmit={handleRegisterUser}
          buttonText="Sign Up"
          formControls={signUpFormControls}
          formData={signUpFormData}
          setFormData={setSignUpFormData}
          formErrors={formErrors}
          isButtonDisabled={!checkIfSignUpFormIsValid()}
        />
      </div>
    </div>
  );
};

export default SignUp;
