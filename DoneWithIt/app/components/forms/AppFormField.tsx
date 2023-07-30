// @ts-nocheck
import { useFormikContext } from "formik";
import React from "react";
import AppError from "./AppError";
import AppTextInput from "../AppTextInput";

interface AppFormFieldProps {
  name: string;
  width?: string | number;
  [otherProps: string]: unknown;
}

function AppFormField({ name, width, ...otherProps }: AppFormFieldProps) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        width={width}
        onBlue={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppError error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
