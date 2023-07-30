import { useFormikContext } from "formik";
import React from "react";
import AppButton from "./AppButton";

interface AppSubmitButtonProps {
  title: string;
}

function AppSubmitButton({ title }: AppSubmitButtonProps) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default AppSubmitButton;
