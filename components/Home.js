import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";
import TripList from "./Trip/TripList";
import { HStack } from "native-base";

const Home = ({ navigation }) => {
  return (
    <View style={styles.homePage}>
      {/* <Text>Home</Text> */}
      <View style={styles.header}>
        <HStack w={"50%"} style={styles.reg}>
          <Button
            onPress={() => navigation.navigate("SignIn")}
            title="SignIn"
          />
          <Button
            onPress={() => navigation.navigate("SignUp")}
            title="SignUp"
          />
        </HStack>
      </View>
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
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    // borderBottomStartRadius: 5000,
    // borderBottomEndRadius: 5000,
  },
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
