import React from "react";
import { View } from "react-native";

function Shadows() {
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

          // for iOS devices
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,

          // for android devices
          elevation: 10,
        }}
      ></View>
    </View>
  );
}

export default Shadows;
