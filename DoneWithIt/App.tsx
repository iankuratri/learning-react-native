import { useState } from "react";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/screens/Screen";

function App() {
  const [imageUris, setImageUris] = useState<string[]>([]);

  const handleAdd = (uri: any) => {
    setImageUris((prevState) => [...prevState, uri]);
  };

  const handleRemove = (uri: any) => {
    const newUris = imageUris.filter((imageUri) => imageUri !== uri);
    setImageUris(newUris);
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
    </Screen>
  );
}

export default App;
