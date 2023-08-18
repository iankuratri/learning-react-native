import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AccountsScreen from "../screens/AccountsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={AccountsScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
