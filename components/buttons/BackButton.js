import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <AntDesign
      name="arrowleft"
      style={styles.back}
      color="rgb(225, 225, 225)"
      onPress={() => navigation.goBack()}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({
  back: {
    fontSize: 24,
    marginLeft: 15,
    // borderColor: "black",
    // borderWidth: 1,
    // borderRadius: 15,
    // backgroundColor: "lightgray",
    marginTop: -35,
  },
});
