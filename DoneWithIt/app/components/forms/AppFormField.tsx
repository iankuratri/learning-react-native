// @ts-nocheck
import { useFormikContext } from "formik";
import React from "react";
import AppError from "./AppError";
import AppTextInput from "../AppTextInput";

interface AppFormFieldProps {
  name: string;
  [otherProps: string]: unknown;
}

function AppFormField({ name, ...otherProps }: AppFormFieldProps) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlue={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppError error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
