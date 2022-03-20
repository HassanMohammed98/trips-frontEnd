import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React from "react";

const AddImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  console.log(result);
  let uriParts = result.uri.split(".");
  let fileType = uriParts[uriParts.length - 1];
  let uri = result.uri;
  if (!result.cancelled) {
    setImage({ uri, name: `photo.${fileType}`, type: `image/${fileType}` });
  }
};

export default AddImage;

const styles = StyleSheet.create({});
