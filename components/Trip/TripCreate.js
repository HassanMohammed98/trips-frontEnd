import { Button } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/tripStore";

const TripCreate = ({ navigation }) => {
  const [trip, setTrip] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleSubmit = () => {
    // ! if the error get you here >> you are not sign in::
    console.log(authStore.user._id);
    console.log(trip);
    tripStore.createTrip(trip, authStore.user._id);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.Text}>
      <TextInput
        placeholder="enter you name here please"
        onChangeText={(name) => setTrip({ ...trip, name })}
      />
      <TextInput
        multiline
        placeholder="enter you description here please"
        onChangeText={(description) => setTrip({ ...trip, description })}
      />
      {/* need why to upload img in react native: */}
      <TextInput
        placeholder="upload Image"
        onChangeText={(image) => setTrip({ ...trip, image })}
      />
      <Button style={styles.Button} onPress={handleSubmit}>
        submit
      </Button>
    </View>
  );
};

export default observer(TripCreate);

const styles = StyleSheet.create({
  Button: {
    width: 150,
    height: 80,
    color: "red",
  },
  //  we need to center it for design only pleases:
  Text: {
    justifyContent: "center",
  },
});
