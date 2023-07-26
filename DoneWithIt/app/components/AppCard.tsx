import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface AppCardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

function AppCard({ title, subTitle, image }: AppCardProps) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default AppCard;
