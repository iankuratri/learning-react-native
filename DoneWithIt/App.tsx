import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const handlePress = (element: string) => {
    console.log(`${element} pressed.`);
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
