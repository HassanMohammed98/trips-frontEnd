import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TripList from "./Trip/TripList";

const HomeNotRegister = () => {
  return (
    <View>
      {/* Header  (register + login buttons)*/}
      <Text>HomeNotRegister</Text>

      {/* Trip List */}

      <TripList />
    </View>
  );
};

export default HomeNotRegister;

const styles = StyleSheet.create({});
