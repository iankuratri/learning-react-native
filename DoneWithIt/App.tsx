import { useState } from "react";
import ImageInputList from "./app/components/ImageInputList";

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
    <ImageInputList
      imageUris={imageUris}
      onRemoveImage={handleRemove}
      onAddImage={handleAdd}
    />
  );
}

export default App;
