import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    navigation.navigate("Home");
  };
  // if (authStore.user) for auth in the futer
  return (
    <View>
      <Text> Signup</Text>
      <TextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="username"
      />
      <TextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="password"
      />
      <TextInput
        onChangeText={(firstname) => setUser({ ...user, firstname })}
        placeholder="first name"
      />
      <TextInput
        onChangeText={(lastname) => setUser({ ...user, lastname })}
        placeholder="last name"
      />

      <Button title="submit" onPress={handleSubmit}>
        GO
      </Button>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
