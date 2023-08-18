import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import defaultColors from "../config/colors";

interface NewListingButtonProps {
  onPress: () => any;
}

function NewListingButton({ onPress }: NewListingButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={defaultColors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaultColors.primary,
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: defaultColors.white,
    borderWidth: 10,
    bottom: 30,
  },
});

export default NewListingButton;
