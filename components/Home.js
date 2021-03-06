import { StyleSheet, View } from "react-native";
import React from "react";
import TripList from "./Trip/TripList";
import Header from "./Header";
import { observer } from "mobx-react";
import BottomTab from "./BottomTab";

const Home = ({ navigation, route }) => {
  console.log(route.name);
  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation} /> */}
      <View style={styles.tripList}>
        <TripList />
      </View>
      <View style={styles.tripListTwo}></View>
      <BottomTab navigation={navigation} route={route} />
    </View>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245,245,245)",

    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  tripList: {
    flex: 10,
    width: "100%",
    paddingBottom: 8,
    // backgroundColor: "rgb(48, 71, 94)",
  },
});
