import { useState } from "react";
import { View } from "react-native";
import ImageInput from "./app/components/ImageInput";

function App() {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageInput imageUri={imageUri} onChangeImage={setImageUri} />
    </View>
  );
}

export default App;
