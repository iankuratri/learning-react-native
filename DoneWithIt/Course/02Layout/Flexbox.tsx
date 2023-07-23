import React from "react";
import { View, Text } from "react-native";

const Flexbox = () => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "dodgerblue", flex: 2 }}>
        <Text>1</Text>
      </View>
      <View style={{ backgroundColor: "gold", flex: 1 }}>
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: "tomato", flex: 2 }}>
        <Text>3</Text>
      </View>
    </View>
  );
};

export default Flexbox;
