import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <NavigationContainer theme={navigationTheme}>
      {!loggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
}

export default App;
