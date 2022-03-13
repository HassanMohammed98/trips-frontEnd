import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, Button } from "native-base";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const Header = ({ navigation }) => {
  // console.log(authStore.user);
  return (
    <View style={styles.testOne}>
      {!authStore.user ? (
        <HStack w={"35%"} style={styles.reg}>
          <Button
            size="sm"
            variant="outline"
            onPress={() => navigation.navigate("SignIn")}
          >
            SignIn
          </Button>
          <Button
            size="sm"
            variant="outline"
            onPress={() => navigation.navigate("SignUp")}
          >
            SignUp
          </Button>
        </HStack>
      ) : (
        <Text
          style={{
            color: "black",
            paddingRight: 10,
            fontSize: 15,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            textAlign: "right",
          }}
        >
          Welcome,{"\n "}
          {authStore.user.username}
        </Text>
      )}
    </View>
  );
};

export default observer(Header);

const styles = StyleSheet.create({
  testOne: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
  reg: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});
