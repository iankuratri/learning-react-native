import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AccountsScreen from "../screens/AccountsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingScreen from "../screens/ListingScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={ListingScreen} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Acoount" component={AccountsScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
