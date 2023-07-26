import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ children }: any) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
