import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

interface AppIcon {
  name: string | any;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

function AppIcon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}: AppIcon) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default AppIcon;
