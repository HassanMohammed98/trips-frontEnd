import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Center } from "native-base";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    navigation.navigate("Home");
  };
  // if (authStore.user) for auth in the futer
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRVLR</Text>
      <Text style={styles.header}> Signup</Text>
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
        placeholder="first name"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(lastname) => setUser({ ...user, lastname })}
        placeholder="last name"
      />

      <Button style={styles.button} title="submit" onPress={handleSubmit}>
        GO
      </Button>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        Click here to signin!
      </Button>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    margin: 4,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    margin: 6,
    // padding: 6,
  },
  title: {
    bottom: 100,
    fontSize: 50,
  },
});
