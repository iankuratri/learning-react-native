// @ts-nocheck
import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import AppError from "./AppError";

type Value = string | number;
type Item = { label: string; value: Value };

interface AppFormPicker {
  items: Item[];
  name: string;
  placeholder: string;
  width?: string | number;
  numberOfColumns?: number;
  PickerItemComponent?: any;
}

function AppFormPicker({
  items,
  name,
  placeholder,
  width,
  numberOfColumns,
  PickerItemComponent,
}: AppFormPicker) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      />
      <AppError error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
