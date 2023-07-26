import Constants from "expo-constants";
import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
