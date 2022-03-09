import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { HStack } from "native-base";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <HStack w={"50%"} style={styles.reg}>
        <Button onPress={() => navigation.navigate("SignIn")} title="SignIn" />
        <Button onPress={() => navigation.navigate("SignUp")} title="SignUp" />
      </HStack>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    // borderBottomStartRadius: 5000,
    // borderBottomEndRadius: 5000,
  },
  reg: {
    borderColor: "black",
    borderWidth: 3,
    display: "flex",
    justifyContent: "space-evenly",
  },
});
