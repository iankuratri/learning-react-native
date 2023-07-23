import React from "react";
import { View, Text } from "react-native";

const Flexbox = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between", // Primary axis, Main, Horizontal, X
        alignItems: "center", // Cross axis, Secondary, Vertical, Y
      }}
    >
      <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          alignSelf: "flex-end",
        }}
      >
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }}>
        <Text>3</Text>
      </View>
    </View>
  );
};

export default Flexbox;
