// @ts-nocheck
import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import AppError from "./AppError";

interface AppFormImagePickerProps {
  name: string;
}

function AppFormImagePicker({ name }: AppFormImagePickerProps) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri: any) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: any) => {
    const newUris = imageUris.filter((imageUri) => imageUri !== uri);
    setFieldValue(name, newUris);
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <AppError error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormImagePicker;
