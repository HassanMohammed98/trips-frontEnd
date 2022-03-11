import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";
import TripList from "./Trip/TripList";
import Header from "./Header";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import SignOut from "./buttons/SignOut";

const Home = ({ navigation }) => {
  console.log(authStore.user);
  return (
    <View style={styles.homePage}>
      <Header navigation={navigation} />
      <ScrollView style={styles.TripsList}>
        <TripList />

        <Button
          onPress={() => navigation.navigate("TripCreate")}
          title="TripCreate"
        />
        <SignOut />
      </ScrollView>
    </View>
  );
};

export default observer(Home);

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
