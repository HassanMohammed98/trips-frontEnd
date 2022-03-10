import { StyleSheet } from "react-native";
import React from "react";
import { Menu, Divider, HamburgerIcon, Button } from "native-base";
import { Pressable } from "react-native";

const DropDown = () => {
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
      <Button>EDIT</Button>
      <Divider />
      <Button>View trips</Button>
      <Divider />
      <Button>Create trip</Button>
    </Menu>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
