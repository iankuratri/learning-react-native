import React from "react";
import Screen from "./../../app/screens/Screen";
import AppText from "../../app/components/AppText";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

function Tweets() {
  return (
    <Screen>
      <AppText>Tweets</AppText>
    </Screen>
  );
}

function TweetDetails() {
  return (
    <Screen>
      <AppText>Tweet Details</AppText>
    </Screen>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tweets">
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
