import React, { useEffect } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function ImageInput({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUri = values[name];
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) setFieldValue(name, result.uri);
    } catch (error) {
      console.log("Error fetching image");
    }
  };

  const deleteImage = async () => {
    Alert.alert("Delete Image", "Are you sure you want to delete this image", [
      { text: "Yes", onPress: () => setFieldValue(name, null) },
      { text: "No" },
    ]);
  };

  const handlePress = async () => {
    !imageUri ? selectImage() : deleteImage();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {!imageUri && (
            <MaterialCommunityIcons name="image-edit-outline" size={50} />
          )}
          {imageUri && (
            <Image source={{ uri: values[name] }} style={styles.image} />
          )}
        </View>
      </TouchableWithoutFeedback>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
