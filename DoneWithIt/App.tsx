import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, React Native!</Text>
      <Text numberOfLines={3} onPress={handlePress}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ullam,
        ab voluptatum distinctio reprehenderit aut cum nihil accusamus, ratione
        quo, molestias provident officiis nulla sunt exercitationem repellat
        quam dolor reiciendis.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "dodgerblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
