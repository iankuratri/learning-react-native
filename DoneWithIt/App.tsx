import { useDeviceOrientation } from "@react-native-community/hooks";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));

  const orientation = useDeviceOrientation();
  console.log("orientation:", orientation);

  const dimensions = useWindowDimensions();
  console.log("dimensions:", dimensions);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "portrait" ? "30%" : "100%",
        }}
      ></View>
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
  },
});
