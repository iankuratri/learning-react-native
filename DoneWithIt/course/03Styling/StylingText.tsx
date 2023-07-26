import React from "react";
import { View, Text } from "react-native";
import AppText from "./AppText";

function StylingText() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          // fontFamily: "Roboto", - fonts are specific to android and ios platform
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "lowercase",
          textDecorationLine: "underline",
          textAlign: "center",
          lineHeight: 60,
        }}
      >
        I love React Native! This is my first mobile App.
      </Text>
      <AppText>This text is rendered using AppText component!</AppText>
    </View>
  );
}

export default StylingText;
