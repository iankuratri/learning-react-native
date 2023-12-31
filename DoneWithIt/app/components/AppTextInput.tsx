import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

interface AppTextInputProps {
  icon?: string | any;
  width?: string | number;
  [otherProps: string]: unknown;
}

function AppTextInput({
  icon,
  width = "100%",
  ...otherProps
}: AppTextInputProps) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    ...defaultStyles.text,
  },
});

export default AppTextInput;
