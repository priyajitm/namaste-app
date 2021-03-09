import { useFormikContext } from "formik";
import React from "react";
import { Text } from "react-native";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./TextInput";

function FormField({ name, width, ...props }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
