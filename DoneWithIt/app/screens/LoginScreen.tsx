import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import AppError from "../components/AppError";
import AppTextInput from "../components/AppTextInput";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              onBlue={() => setFieldTouched("email")}
              autoCorrect={false}
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <AppError error={errors.email} visible={touched.email} />

            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppError error={errors.password} visible={touched.password} />

            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
