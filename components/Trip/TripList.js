import { StyleSheet, Text, View, ScrollView } from "react-native";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import TripItem from "./TripItem";
import authStore from "../../stores/authStore";
import { HStack, VStack } from "native-base";

const TripList = () => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} />
  ));

  return <ScrollView style={styles.List}>{tripList}</ScrollView>;
};

export default observer(TripList);

const styles = StyleSheet.create({
  List: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 50,
  },
});
