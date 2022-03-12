import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import { Button } from "native-base";
import authStore from "../../stores/authStore";
import { Vstack } from "native-base";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    console.log("Signin", user); // give you username and password
    await authStore.signin(user, navigation);
  };
  // if (authStore.user)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRVLR</Text>
      <View>
        <Text style={styles.header}> Signin</Text>
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

        <Button style={styles.button} title="submit" onPress={handleSubmit}>
          GO
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          Click here to register!
        </Button>
      </View>
    </View>
  );
};

export default observer(SignIn);

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
