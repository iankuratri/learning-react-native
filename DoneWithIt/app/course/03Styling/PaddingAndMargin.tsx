import React from "react";
import { View } from "react-native";

function PaddingAndMargin() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingTop: 30,
        }}
      >
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }}></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      ></View>
    </View>
  );
}

export default PaddingAndMargin;
