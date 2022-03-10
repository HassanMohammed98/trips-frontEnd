import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TripList from "./TripList";

const TripDetail = ({ route }) => {
  const { trip } = route.params;
  console.log(trip);

  return (
    <View>
      <Text>owner: {trip.user.username} </Text>
      <Text>{trip.name} </Text>
      <Text>{trip.name} </Text>
      <Text>{trip.description} </Text>
    </View>
  );
};

export default TripDetail;

const styles = StyleSheet.create({});
