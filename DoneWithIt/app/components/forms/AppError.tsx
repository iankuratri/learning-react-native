import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

interface AppErrorProps {
  error: string | undefined;
  visible: boolean | undefined;
}

function AppError({ error, visible }: AppErrorProps) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default AppError;
