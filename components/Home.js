import { StyleSheet, View } from "react-native";
import React from "react";
import TripList from "./Trip/TripList";
import Header from "./Header";
import { observer } from "mobx-react";
import BottomTab from "./BottomTab";

import SignOut from "./buttons/SignOut";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.tripList}>
        <TripList />
      </View>
      <BottomTab navigation={navigation} />
    </View>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  tripList: {
    flex: 10,
    width: "100%",
    backgroundColor: "rgb(48, 71, 94)",
  },
});
