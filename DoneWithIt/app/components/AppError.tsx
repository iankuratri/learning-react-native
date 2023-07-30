import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

interface AppErrorProps {
  error: string | undefined;
}

function AppError({ error }: AppErrorProps) {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default AppError;
