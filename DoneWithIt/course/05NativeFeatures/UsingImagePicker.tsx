import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import AppText from "../../app/components/AppText";
import Screen from "../../app/screens/Screen";

function UsingImagePicker() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <AppText>Image Picker example</AppText>
    </Screen>
  );
}

export default UsingImagePicker;
