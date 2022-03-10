import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TripList from "./TripList";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  return (
    <View>
      <Text>{trip.name} </Text>

      <TripList trips={trip.trips} />
    </View>
  );
};

export default TripDetail;

const styles = StyleSheet.create({});
