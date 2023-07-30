import { Formik } from "formik";
import React, { ReactNode } from "react";

interface AppFormProps {
  children: ReactNode;
  initialValues: Object;
  onSubmit: (values: any) => any;
  validationSchema: any;
}

function AppForm({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: AppFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
