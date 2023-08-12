import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultColors from "../config/colors";

interface ImageInputProps {
  imageUri?: string | undefined;
  onChangeImage: (url: string | undefined) => void;
}

function ImageInput({ imageUri, onChangeImage }: ImageInputProps) {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(undefined),
        },
        {
          text: "No",
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri ? (
          <MaterialCommunityIcons
            color={defaultColors.medium}
            name="camera"
            size={40}
          />
        ) : (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaultColors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
