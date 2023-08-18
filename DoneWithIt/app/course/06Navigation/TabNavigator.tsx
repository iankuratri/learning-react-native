import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppText from "../../components/AppText";
import Screen from "./../../screens/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackNavigator as FeedNavigator } from "./StackNavigator";

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

function TabNavigatorContainer() {
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
          component={FeedNavigator}
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

export default TabNavigatorContainer;
