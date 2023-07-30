import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

interface CategoryPickerItemProps {
  item: any;
  onPress: () => any;
}

function CategoryPickerItem({ item, onPress }: CategoryPickerItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AppIcon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
