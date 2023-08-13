import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppButton from "../../app/components/AppButton";
import AppText from "../../app/components/AppText";
import Screen from "./../../app/screens/Screen";

function Goback() {
  const navigation = useNavigation();

  return <AppButton title="Go back" onPress={() => navigation.goBack()} />;
}

function Tweets({ navigation }: any) {
  return (
    <Screen>
      <AppText>Tweets</AppText>
      <AppButton
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
      />
    </Screen>
  );
}

function TweetDetails({ route }: any) {
  return (
    <Screen>
      <AppText>Tweet Details {route.params.id}</AppText>
      <Goback />
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
