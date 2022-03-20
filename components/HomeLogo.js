import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { HStack } from "native-base";

const HomeLogo = () => {
  return (
    <HStack w={"55%"} style={styles.HomeLogo}>
      <Image
        style={{
          width: 40,
          height: 40,
          zIndex: 50,
          resizeMode: "contain",
        }}
        source={require("./Auth/img/logo.png")}
      />
      <Text style={styles.text}>TRVLR</Text>
    </HStack>
  );
};

export default HomeLogo;

const styles = StyleSheet.create({
  HomeLogo: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: -33,
    // marginLeft: 2,
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },
  text: { color: "white", fontSize: 17, fontWeight: "bold", marginLeft: -13 },
});
