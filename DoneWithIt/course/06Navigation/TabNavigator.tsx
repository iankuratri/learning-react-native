import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppText from "../../app/components/AppText";
import Screen from "./../../app/screens/Screen";

function Feed() {
  return (
    <Screen>
      <AppText>Feed</AppText>
    </Screen>
  );
}

function Account() {
  return (
    <Screen>
      <AppText>Account Details</AppText>
    </Screen>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
