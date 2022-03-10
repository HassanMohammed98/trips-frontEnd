import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";
import TripList from "./Trip/TripList";
import Header from "./Header";
import DropDown from "./buttons/DropDown";

const Home = ({ navigation }) => {
  return (
    <View style={styles.homePage}>
      <DropDown />
      <Header navigation={navigation} />
      <ScrollView style={styles.TripsList}>
        <TripList />

        <Button
          onPress={() => navigation.navigate("TripCreate")}
          title="TripCreate"
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homePage: {
    width: "100%",
    height: "100%",
  },
  TripsList: {
    width: "100%",
    height: "90%",
    backgroundColor: "pink",
  },
  Text: { fontSize: 50 },
});
