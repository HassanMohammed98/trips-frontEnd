import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, Button } from "native-base";
import authStore from "../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";

const Header = () => {
  const navigation = useNavigation();
  console.log(authStore.user);
  return (
    // <View style={styles.testOne}>
    !authStore.user ? (
      <HStack w={"140%"} style={styles.reg}>
        <Button
          size="sm"
          // style={{ width: "40%", color: "white", borderRadius: 10, padding: 0 }}
          variant="outline"
          style={styles.button}
          _text={{ color: "rgb(245, 245, 245)", fontWeight: "bold" }}
          onPress={() => navigation.navigate("SignIn")}
        >
          SignIn
        </Button>
        <Button
          size="sm"
          // style={{ width: "40%" }}
          variant="outline"
          style={styles.button}
          _text={{ color: "rgb(245, 245, 245)", fontWeight: "bold" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          SignUp
        </Button>
      </HStack>
    ) : (
      <HStack w={"95%"} style={styles.welc}>
        <Text
          style={{
            color: "rgb(225,225,225)",
            fontSize: 15,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            textAlign: "center",
          }}
        >
          Welcome,{"\n "}
          {authStore.user.username}
        </Text>
        <View
          style={{
            width: 33,
            aspectRatio: 1,
            backgroundColor: "white",
            borderRadius: 50,
            marginLeft: -20,
          }}
        ></View>
      </HStack>
    )
    // </View>
  );
};

export default observer(Header);

const styles = StyleSheet.create({
  testOne: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
  reg: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: -33,
    alignItems: "center",
    marginRight: 12,
    // borderColor: "black",
    // borderWidth: 1,
  },
  welc: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: -33,
    alignItems: "center",
  },
  button: {
    // margin: 6,
    width: "44%",
    borderRadius: 40,
    borderColor: "rgb(229, 144, 3)",
    backgroundColor: "rgb(229, 144, 3)",
    borderWidth: 1,
    fontWeight: "bold",
    // textDecorationColor: "white",
    // bg: "amber.400:alpha.70",
  },
});
