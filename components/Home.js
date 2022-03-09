import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";
import TripList from "./Trip/TripList";
import Header from "./Header";

const Home = ({ navigation }) => {
  return (
    <View style={styles.homePage}>
      <Header />
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
  reg: {
    borderColor: "black",
    borderWidth: 3,
    display: "flex",
    justifyContent: "space-evenly",
  },
});
