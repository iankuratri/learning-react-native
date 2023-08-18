import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountsScreen from "../screens/AccountsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name={routes.ACCOUNT} component={AccountsScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
