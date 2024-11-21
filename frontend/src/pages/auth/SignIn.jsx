import CommonForm from "@/components/common-form/CommonForm";
import { signInFormControls } from "@/config/config";
import { AuthContext } from "@/context/authcontext";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ toggleForm }) => {
  const navigate = useNavigate();

  const { signInFormData, setSignInFormData, handleLoginUser } = useContext(AuthContext);

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  const [formErrors, setFormErrors] = useState({});

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
          handleSubmit={handleLoginUser}
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
