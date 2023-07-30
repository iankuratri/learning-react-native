import React, { ReactNode } from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

interface AppTextProps {
  children: ReactNode;
  style?: Object;
  [otherProps: string]: unknown;
}

function AppText({ children, style, ...otherProps }: AppTextProps) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
