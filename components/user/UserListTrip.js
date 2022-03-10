import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserListTrip = ({ navigation }) => {
  return (
    <View style={styles.homePage}>
      {/* header */}
      <Text>this is user trip list page</Text>
      <Text>NAME</Text>
      <Text>description</Text>
      <Text>Image</Text>
    </View>
  );
};

export default UserListTrip;

const styles = StyleSheet.create({});
