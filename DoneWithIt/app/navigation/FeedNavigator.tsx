import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createNativeStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{
          title: "Listing Details",
        }}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
