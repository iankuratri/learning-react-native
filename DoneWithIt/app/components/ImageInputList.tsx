import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

interface ImageInputListProps {
  imageUris: string[];
  onRemoveImage: (uri: string | undefined) => any;
  onAddImage: (uri: string | undefined) => any;
}

function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: ImageInputListProps) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput
          key={uri}
          imageUri={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}
      <ImageInput onChangeImage={onAddImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10, flexWrap: "wrap" },
});

export default ImageInputList;
