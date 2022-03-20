import { StyleSheet, Text, View } from "react-native";
import { HStack } from "native-base";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import React from "react";
import { useToast } from "native-base";

import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

const BottomTab = ({ navigation, route }) => {
  const toast = useToast();
  return (
    authStore.user && (
      <View style={styles.testThree}>
        <HStack
          style={{
            width: "40%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="home"
            size={route.name === "Home" ? 40 : 30}
            color={
              route.name === "Home" ? "rgb(229, 144, 3)" : "rgb(225,225,225)"
            }
            onPress={() => navigation.navigate("Home")}
          />
          <MaterialIcons
            name="luggage"
            // size={33}
            // color="rgb(225,225,225)"
            size={route.name === "UserListTrip" ? 45 : 33}
            color={
              route.name === "UserListTrip"
                ? "rgb(229, 144, 3)"
                : "rgb(225,225,225)"
            }
            onPress={() => navigation.navigate("UserListTrip")}
          />
        </HStack>
        <View
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
            aspectRatio: 1,
            left: "40%",
            top: "-65%",
            margin: 0,
            paddingBottom: 0,
            borderRadius: 700,
            backgroundColor: "rgb(245,245,245)",
            // linearGradient: "Vertical",
            // backgroundGradientTop: "#333333",
            // backgroundGradientBottom: "#666666",
          }}
        >
          <View
            style={{
              width: "95%",
              aspectRatio: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
              padding: 0,
              borderRadius: 700,
              position: "relative",
            }}
          >
            <MaterialIcons
              onPress={() => navigation.navigate("TripCreate")}
              name="add-circle"
              size={75}
              color="rgb(229, 144, 3)"
              style={{
                position: "absolute",
              }}
            />
            <View
              style={{
                width: "50%",
                aspectRatio: 1,
                backgroundColor: "white",
                zIndex: -5,
              }}
            ></View>
          </View>
        </View>
        <HStack
          style={{
            width: "40%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="user-edit"
            // size={30}
            // color="rgb(225,225,225)"
            size={route.name === "UserPage" ? 40 : 30}
            color={
              route.name === "UserPage"
                ? "rgb(229, 144, 3)"
                : "rgb(225,225,225)"
            }
            onPress={() =>
              navigation.navigate("UserPage", { user: authStore.user._id })
            }
          />
          <Entypo
            name="log-out"
            size={24}
            color="rgb(225,225,225)"
            onPress={() => authStore.signout(toast)}
          />
        </HStack>
      </View>
    )
  );
};

export default observer(BottomTab);

const styles = StyleSheet.create({
  testThree: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(48, 71, 94)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});
