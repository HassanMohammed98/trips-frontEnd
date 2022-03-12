import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import { Button } from "native-base";
import authStore from "../../stores/authStore";

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
    <View>
      <Text> Signin</Text>
      <TextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="username"
      />
      <TextInput
        // secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="password"
      />

      <Button title="submit" onPress={handleSubmit}>
        GO
      </Button>
      <Button onPress={() => navigation.navigate("SignUp")}>
        Click here to register!
      </Button>
    </View>
  );
};

export default observer(SignIn);

const styles = StyleSheet.create({});
