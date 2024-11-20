import React from "react";
import { Button } from "../ui/button";
import FormControls from "./FormControls";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  formErrors,
  isButtonDisabled = false,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
        formErrors={formErrors}
      />
      <Button disabled={isButtonDisabled} className="mt-4 w-full" type="submit">{buttonText || "Submit"}</Button>
    </form>
  );
}

export default CommonForm;
