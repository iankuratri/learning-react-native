import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";

interface ListItemDeleteActionProps {
  onPress?: () => any;
}

function ListItemDeleteAction({ onPress }: ListItemDeleteActionProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
