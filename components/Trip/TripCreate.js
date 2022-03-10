import { Button } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import TripList from "./TripList";
import { useNavigation } from "@react-navigation/native";

const TripCreate = () => {
  const handleAdd = () => {
    tripStore.addItemToCart(trip);
  };
  return (
    <View style={styles.Text}>
      <Button style={styles.Button} onPress={handleAdd}>
        CREATE NEW TRIP
      </Button>

      <TripList />
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
