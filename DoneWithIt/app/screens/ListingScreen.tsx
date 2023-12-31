import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import Screen from "./Screen";
import routes from "../navigation/routes";

interface ListingScreenProps {
  navigation: NavigationProp<any, any>;
}

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen({ navigation }: ListingScreenProps) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
