import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "./Screen";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        textContentType="emailAddress"
        onChangeText={setEmail}
        value={email}
      />

      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <AppButton
        title="Login"
        onPress={() => console.log("Login", { email, password })}
      />
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
