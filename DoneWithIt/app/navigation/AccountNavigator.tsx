import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountsScreen from "../screens/AccountsScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Account" component={AccountsScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
