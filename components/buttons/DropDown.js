import { StyleSheet } from "react-native";
import React from "react";
import { Menu, Divider, HamburgerIcon, Button } from "native-base";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DropDown = () => {
  const navigation = useNavigation();

  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon />
          </Pressable>
        );
      }}
    >
      <Button onPress={() => navigation.navigate("UserPage")}>EDIT</Button>
      <Divider />
      <Button onPress={() => navigation.navigate("UserListTrip")}>
        View trips
      </Button>
      <Divider />
      <Button onPress={() => navigation.navigate("TripCreate")}>
        Create trip
      </Button>
    </Menu>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
