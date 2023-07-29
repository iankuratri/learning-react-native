import React, { ReactNode } from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

interface AppTextProps {
  children: ReactNode;
  style?: Object;
}

function AppText({ children, style }: AppTextProps) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
