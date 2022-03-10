import { Button } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

const TripCreate = ({ navigation }) => {
  const [trip, setTrip] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleSubmit = () => {
    tripStore.addItemToTrip(trip);
    navigation.navigate("Home");
    console.log(trip);
  };
  return (
    <View style={styles.Text}>
      <TextInput
        placeholder="enter you name here please"
        onChangeText={(name) => setTrip({ ...trip, name })}
      />
      <TextInput
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

export default TripCreate;

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
