import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
        options={{
          title: "Listing Details",
        }}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
