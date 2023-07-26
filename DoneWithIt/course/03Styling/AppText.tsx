import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ children }: any) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "gold",
  },
});

export default AppText;
