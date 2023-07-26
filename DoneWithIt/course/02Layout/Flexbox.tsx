import React from "react";
import { View, Text } from "react-native";

const Flexbox = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", // Primary axis, Main, Horizontal, X
        alignItems: "center", // Cross axis, Secondary, Vertical, Y - Align each line
        alignContent: "center", // Align entire content
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flexBasis: 100, // It is same as setting width or height depending upon flex direction
          //   width: 100,
          height: 100,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "gold",
          flexGrow: 1, // specifies how much the item will grow relative to the rest of the flexible items inside the same container
          width: 100,
          height: 100,
          //   alignSelf: "flex-end",
        }}
      >
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }}>
        <Text>3</Text>
      </View>
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }}>
        <Text>4</Text>
      </View>
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
          position: "absolute",
          top: 50,
          left: 50,
        }}
      >
        <Text>5</Text>
      </View>
    </View>
  );
};

export default Flexbox;
