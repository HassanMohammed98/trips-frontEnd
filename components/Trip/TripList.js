import { StyleSheet, Text, View } from "react-native";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import TripItem from "./TripItem";
import authStore from "../../stores/authStore";

const TripList = () => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} />
  ));

  return (
    <View>
      <Text>{tripList}</Text>
    </View>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({});
