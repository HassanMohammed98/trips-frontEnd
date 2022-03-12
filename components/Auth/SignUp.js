import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button, HStack, VStack } from "native-base";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <VStack style={styles.topContainer}>
        <View
          style={{
            flex: 1.75,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            // borderColor: "black",
            // borderWidth: 1,
          }}
        >
          <Image
            style={{
              width: 120,
              height: 120,
              zIndex: 50,
              resizeMode: "contain",
            }}
            source={require("./img/logo.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>TRVLR</Text>
        </View>
      </VStack>
      <View style={styles.bottomContainer}>
        <VStack style={{ width: "90%" }}>
          {/* <Text style={styles.header}> Signin</Text> */}
          <VStack space={"3"} style={{ marginBottom: 15 }}>
            <TextInput
              style={styles.textInput}
              onChangeText={(username) => setUser({ ...user, username })}
              placeholder="username"
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={(password) => setUser({ ...user, password })}
              placeholder="password"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(email) => setUser({ ...user, email })}
              placeholder="email"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(firstname) => setUser({ ...user, firstname })}
              placeholder="firstname (optional)"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(lastname) => setUser({ ...user, lastname })}
              placeholder="lastname (optional)"
            />
          </VStack>
          <VStack
            space="1"
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Button
              variant="outline"
              style={styles.button}
              onPress={handleSubmit}
              _text={{ color: "rgb(245, 245, 245)", fontWeight: "bold" }}
            >
              SignUp
            </Button>
            <HStack
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "70%",
              }}
            >
              <Text style={[styles.text, { fontFamily: "notoserif" }]}>
                Already have an account?
              </Text>
              <Text
                style={[styles.text, { fontWeight: "bold" }]}
                onPress={() => navigation.navigate("SignIn")}
              >
                SignIn here
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(245, 245, 245)",
  },
  topContainer: {
    // backgroundColor: "white",
    flex: 1,
    width: "100%",
    position: "relative",
    // justifyContent: "center",
    // alignItems: "center",
  },

  bottomContainer: {
    backgroundColor: "rgb(48, 71, 94)",
    flex: 2,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: 10,
    width: 10,
    zIndex: 5,
  },

  textInput: {
    margin: 3,
    padding: 4,
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgb(225, 225, 225)",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },

  button: {
    margin: 6,
    width: "50%",
    borderRadius: 40,
    borderColor: "rgb(229, 144, 3)",
    backgroundColor: "rgb(229, 144, 3)",
    borderWidth: 1,
    fontWeight: "bold",
    textDecorationColor: "white",
    // bg: "amber.400:alpha.70",
  },
  title: {
    fontSize: 40,
    color: "rgb(48, 71, 94)",
  },

  text: {
    padding: 7,
    color: "rgb(225, 225, 225)",
    fontSize: 14,
  },
});
