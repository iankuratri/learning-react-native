import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppText from "../../app/components/AppText";
import Screen from "./../../app/screens/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Feed() {
  return (
    <Screen>
      <AppText>Feed Page</AppText>
    </Screen>
  );
}

function Account() {
  return (
    <Screen>
      <AppText>Account Details Page</AppText>
    </Screen>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveBackgroundColor: "tomato",
          tabBarActiveTintColor: "white",
          tabBarInactiveBackgroundColor: "#eee",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
