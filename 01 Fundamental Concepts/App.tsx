// @ts-nocheck
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = (element: string) => {
    Alert.alert("My title", `${element} pressed.`, [
      {
        text: "Yes",
        onPress: () => console.log("Yes"),
      },
      {
        text: "No",
        onPress: () => console.log("No"),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, React Native!</Text>
      <Text numberOfLines={3} onPress={() => handlePress("Text")}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ullam,
        ab voluptatum distinctio reprehenderit aut cum nihil accusamus, ratione
        quo, molestias provident officiis nulla sunt exercitationem repellat
        quam dolor reiciendis.
      </Text>

      <TouchableHighlight onPress={() => handlePress("Image")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      <Button
        color={"orange"}
        title="Click me"
        onPress={() => handlePress("Button")}
      />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
