import { StyleSheet, Text, View, ScrollView } from "react-native";
import tripStore from "../../stores/tripStore";
import { observer } from "mobx-react";
import UserTripItem from "./UserTripItem";
import { HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";

const UserListView = () => {
  const tripList = tripStore.trips
    .filter((trip) => authStore.user._id === trip.user._id)
    .map((trip) => <UserTripItem trip={trip} key={trip._id} />);

  //   console.log("authstore user", authStore.user);
  //   console.log("tripstore user", tripStore.trips[0].user._id);
  return <ScrollView style={styles.List}>{tripList}</ScrollView>;
};

export default observer(UserListView);

const styles = StyleSheet.create({
  List: {
    width: "100%",
  },
});
