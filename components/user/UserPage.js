import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Button } from "native-base";

const UserPage = ({ navigation }) => {
  return (
    <View>
      {/* header */}
      {/* avatar */}
      <Avatar
        source={{
          uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
        }}
      >
        GG
      </Avatar>
      {/* take the name from the user schemaha */}
      {/* <Text>{User.username}</Text> */}
      {/* view trips button navigate to user trips list */}
      <Button onPress={() => navigation.navigate("UserListTrip")}>VIEW</Button>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({});
